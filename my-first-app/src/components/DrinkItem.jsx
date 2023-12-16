import React from "react";
import "./DrinkItem.css";

export const DrinkItem = ({ drink, clickFn }) => {
  console.log("Type of clickFn:", typeof clickFn);
  return (
    <button className="drink-item-container" onClick={() => clickFn(drink)}>
      <img className="drink-item-img" src={drink.imgUrl} alt={drink.alt} />
      <p className="drink-item-name">{drink.name}</p>
    </button>
  );
};
