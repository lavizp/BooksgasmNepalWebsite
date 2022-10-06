import React, { useContext, useState, useEffect } from "react";

import { auth } from "../Data/firebase";
const AuthContext = React.createContext();

import db from "../Data/firebase";
import { doc, Firestore, setDoc } from "firebase/firestore";
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  async function signUp(email, password) {
    const { user } = auth.createUserWithEmailAndPassword(email, password);
    await createUserDocument(user, []);
    return user;
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  async function createUserDocument(user, additionalData) {
    if (!user) return;
    const userRef = Firestore.doc(`/users/${user.uid}`);

    const { email } = user;
    const { cartData } = additionalData;
    try {
      userRef.set(email, cartData);
    } catch (err) {
      console.log(err);
    }
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
  };
  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
