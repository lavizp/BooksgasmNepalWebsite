import db from "../Data/firebase";

import { getDoc, collection, doc } from "firebase/firestore";

const GetUserData = async function (userID) {
  const usersCollectionRef = doc(db, "users", userID);
  const data = await getDoc(usersCollectionRef);
  return data;
};

export { GetUserData };
