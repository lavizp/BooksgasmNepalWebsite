import React, { useContext, useState, useEffect } from "react";

import { auth } from "../Data/firebase";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
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
