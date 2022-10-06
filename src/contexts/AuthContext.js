import React, { useContext, useState, useEffect } from "react";

import { auth } from "../Data/firebase";
const AuthContext = React.createContext();

import db from "../Data/firebase";
import { doc, Firestore, setDoc } from "firebase/firestore";
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function signUp(email, password) {
    await auth.createUserWithEmailAndPassword(email, password);
    console.log(auth.currentUser.uid);
    setDoc(doc(db, "users", auth.currentUser.uid), {
      email,
      password,
      cartData: [],
    });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function signOut() {
    console.log("Sign Out");
    return auth.signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signUp,
    signOut,
  };
  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
