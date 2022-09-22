import db from "../Data/firebase";

import { getDocs, collection } from "firebase/firestore";

const GetBookData = async function () {
  const usersCollectionRef = collection(db, "bookList");
  const data = await getDocs(usersCollectionRef);
  return data;
};

export { GetBookData };
