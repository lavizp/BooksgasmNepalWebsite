import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyChvGETPVdCzS-6FdBRAcS0DH5MP5htwSA",
  authDomain: "booksgasmnepal.firebaseapp.com",
  projectId: "booksgasmnepal",
  storageBucket: "booksgasmnepal.appspot.com",
  messagingSenderId: "866012951786",
  appId: "1:866012951786:web:bc32810dca8c686c25d393",
});

const db = firebaseConfig.firestore();
export default db;
