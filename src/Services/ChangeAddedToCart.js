import db from "../Data/firebase";
import { getDocs, collection } from "firebase/firestore";
import firebase from "firebase/compat/app";
const ChangeAddedToCart = async function (
  bookId,
  addedToCart,
  totalItemInCart,
  currentUser
) {
  let text = "";
  let added = addedToCart;
  let totalItems = totalItemInCart;
  if (!addedToCart) {
    await db
      .collection("users")
      .doc(currentUser.toString())
      .update({
        cartData: firebase.firestore.FieldValue.arrayUnion(bookId.toString()),
      });
    totalItems++;

    text = "Remove";
  } else {
    await db
      .collection("users")
      .doc(currentUser.toString())
      .update({
        cartData: firebase.firestore.FieldValue.arrayRemove(bookId.toString()),
      });
    totalItems--;
    text = "Add to Cart";
  }
  added = !added;

  return { text, added, totalItems };
};

export { ChangeAddedToCart };
