import React from "react";
import "./catogerylist.css";
import SingleCatogeryElement from "../Single Catogery/SingleCatogeryElement";

export default function CatogeryList() {
  const catogerylist = [
    {
      title: "Fiction",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuisyz0EkVLSNRUG1gynIGGcIWGll8tWzvUlXXw4b3zmLJJytpmyVIn6y1pHBBvbhRqEo&usqp=CAU",
      link: "/fiction",
    },
    {
      title: "Self-Help",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GX5Anhtr52rEFTaxfwS-oUukoPVAhOOvkA&usqp=CAU",
      link: "/self-help",
    },
  ];
  return (
    <>
      <div className="list-title">
        <h1 className="yellow">Catogeries:</h1>
      </div>
      <div className="catogery-list">
        {catogerylist.map((item, index) => (
          <SingleCatogeryElement
            key={index}
            image={item.image}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
}
