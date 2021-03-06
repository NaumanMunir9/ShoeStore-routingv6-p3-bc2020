import React from "react";
import { useParams } from "react-router";
import ShoesStore from "../../../StoreData/ShoesStore";

const Loafer = () => {
  const { id } = useParams();
  const singleLoafer = ShoesStore[1].items[id];
  const { image, name } = singleLoafer;

  return (
    <div className="shoe-container">
      <img className="shoe-image" src={image} alt={name} />
      <h1 className="shoe-title">{name}</h1>
    </div>
  );
};

export default Loafer;
