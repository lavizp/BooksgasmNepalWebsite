import { useEffect, useState } from "react";
import db from "../Data/firebase";
import { getDoc, doc } from "firebase/firestore";

import { GetUserData } from "../Services/GetUserData";
export default function useCartData(currentUser, bookListData) {
  const [cartDatas, setCartDatas] = useState([]);

  const getTotalPrice = (arr) => {
    let total = 0;
    arr.forEach((element) => {
      total += Number(element.price);
    });
    return total;
  };
  useEffect(() => {
    const getUserCartData = async () => {
      const dataSnapshot = await GetUserData(currentUser.uid);
      if (dataSnapshot.exists) {
        let ctdt = bookListData.filter((element) => {
          return dataSnapshot.data().cartData.includes(element.id);
        });
        console.log(dataSnapshot.data().cartData);
        setCartDatas(ctdt);
      } else {
        console.log("data dosent exist");
      }
    };
    getUserCartData();
  }, [bookListData]);

  return { cartDatas, getTotalPrice };
}
