import React from "react";
import { useParams } from "react-router-dom";

export default function SingleCatogeryPage() {
  const { catogery } = useParams();
  return (
    <div>
      <h1>{catogery}</h1>
    </div>
  );
}
