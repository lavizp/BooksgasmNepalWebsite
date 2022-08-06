import React from "react";
import "./singlecatogery.css";
import { useNavigate } from "react-router-dom";

export default function SingleCatogeryElement({ image, title, link }) {
  let navigate = useNavigate();
  const visitCatogery = () => {
    navigate("/catogeries" + link);
  };
  return (
    <div className="single-container-catogery" onClick={visitCatogery}>
      <img src={image} />
      <h1>{title}</h1>
    </div>
  );
}
