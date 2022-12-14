import React, { useRef } from "react";
import db from "../../Data/firebase";
import { addDoc, collection } from "firebase/firestore";
export default function Admin() {
  const titleRef = useRef();
  const authroRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const catogeryRef = useRef();
  const descRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCityRef = collection(db, "bookList");
    const data = {
      title: titleRef.current.value,
      author: authroRef.current.value,
      price: Number(priceRef.current.value),
      image: imageRef.current.value,
      catogery: catogeryRef.current.value,
      description: descRef.current.value,
    };
    await addDoc(newCityRef, data);
  };
  return (
    <div>
      <form>
        Title:<input type="text" ref={titleRef}></input>
        Author:<input ref={authroRef}></input>
        Price:<input type="number" ref={priceRef}></input>
        <br />
        Image:<input type="text" ref={imageRef}></input>
        Catogery:
        <select name="cars" id="cars" ref={catogeryRef}>
          <option value="fiction">Fiction</option>
          <option value="investing">Investing</option>
          <option value="self-help">Self-Help</option>
          <option value="biography">Biography</option>
        </select>
        <br></br>
        Description:
        <input style={{ height: "500px", width: "100%" }} ref={descRef}></input>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}
