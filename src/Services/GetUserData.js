import db from "../Data/firebase";

import { getDocs, collection } from "firebase/firestore";

const GetUserData = async function () {
  const usersCollectionRef = collection(db, "users");
  const data = await getDocs(usersCollectionRef);
  return data;
};

export { GetUserData };
