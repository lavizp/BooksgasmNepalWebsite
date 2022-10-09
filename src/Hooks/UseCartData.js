import React, { useEffect, useState } from "react";
import db from "../Data/firebase";
import { collection, getDoc, doc } from "firebase/firestore";
export default function useCartData(currentUser, bookListData) {
  const [cartDatas, setCartDatas] = useState([]);
  const [userData, setUserData] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  //const { userData } = useUser();

  const getTotalPrice = (arr) => {
    let total = 0;
    arr.forEach((element) => {
      total += Number(element.price);
    });
    return total;
  };
  useEffect(() => {
    const getUserData = async function () {
      const usersCollectionRef = doc(db, "users", currentUser.uid);
      const data = await getDoc(usersCollectionRef);
      setUserData(data.data());
      setCartDatas(
        bookListData.filter((element) =>
          userData.cartData?.includes(element.id.toString())
        )
      );
    };
    getUserData();
  }, [currentUser.uid]);
  useEffect(() => {}, [userData]);

  return { cartDatas, getTotalPrice };
}
