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

  const { currentUser } = useAuth();

  useEffect(() => {
    const getUser = async () => {
      const dt = await GetUserData();
      setAllUserData(dt.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
    setIsLoading(false);
  }, []);
  useEffect(() => {
    if (!currentUser) return;
    allUserData.forEach((data) => {
      if (data.id == currentUser.uid) {
        setUserData(data);
        console.log(data);
      }
    });
  }, [allUserData]);
  const value = {
    userData,
  };
  return (
    <UserContext.Provider value={value}>
      {!isLoading && children}
    </UserContext.Provider>
  );
}
