import React, { useContext, useState, useEffect } from "react";

const UserContext = React.createContext();

import { GetUserData } from "../Services/GetUserData";
import { useAuth } from "./AuthContext";
export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [totalItemInCart, SetTotalItemInCart] = useState(0);

  const { currentUser } = useAuth();

  useEffect(() => {
    const getUser = async () => {
      if (!currentUser) {
        setIsLoading(false);
        return;
      }

      const dt = await GetUserData(currentUser.uid);
      setUserData(dt.data());
      SetTotalItemInCart(dt.data().cartData.length);

      setIsLoading(false);
    };
    getUser();
  }, []);
  // useEffect(() => {
  //   if (!currentUser) return;
  //   if (!userData.cartData) return;
  //   SetTotalItemInCart(userData.cartData.length);
  // }, [userData]);
  const value = {
    userData,
    totalItemInCart,
    SetTotalItemInCart,
  };
  return (
    <UserContext.Provider value={value}>
      {!isLoading && children}
    </UserContext.Provider>
  );
}
