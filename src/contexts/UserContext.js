import React, { useContext, useState, useEffect } from "react";

const UserContext = React.createContext();

import { GetUserData } from "../Services/GetUserData";
import { useAuth } from "./AuthContext";
export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [allUserData, setAllUserData] = useState([]);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [totalItemInCart, SetTotalItemInCart] = useState(0);

  const { currentUser } = useAuth();

  useEffect(() => {
    const getUser = async () => {
      const dt = await GetUserData(currentUser.uid);
      setUserData(dt.data());
      setIsLoading(false);
    };
    getUser();
  }, []);
  // useEffect(() => {
  //   if (!currentUser) return;
  //   allUserData.forEach((data) => {
  //     if (data.id == currentUser.uid) {
  //       setUserData(data);
  //       SetTotalItemInCart(data.cartData.length);
  //     }
  //   });
  // }, [allUserData]);
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
