import db from "../Data/firebase";
import { getDocs, collection } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { useUser } from "../contexts/UserContext";
const setAddedToCart = async function (addedToCart) {
  const { userData, totalItemInCart, SetTotalItemInCart } = useUser();
  if (!addedToCart) {
    await db
      .collection("users")
      .doc(currentUser.uid.toString())
      .update({
        cartData: firebase.firestore.FieldValue.arrayUnion(id.toString()),
      });

    SetTotalItemInCart(totalItemInCart + 1);
  } else {
    await db
      .collection("users")
      .doc(currentUser.uid.toString())
      .update({
        cartData: firebase.firestore.FieldValue.arrayRemove(id.toString()),
      });
    SetTotalItemInCart(totalItemInCart - 1);
  }
};

export { setAddedToCart };
