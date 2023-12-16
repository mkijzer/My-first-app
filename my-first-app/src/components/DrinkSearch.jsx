import React from "react";
import { useState } from "react";
import { TextInput } from "./UI/TextInput";
import { DrinkList } from "./DrinkList";
import { availableDrinks } from "../utils/data";

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  return (
    <>
      <p>{`What would you like to drink?`}</p>
      <TextInput />
      <p>{searchField}</p>
      <DrinkList drinks={availableDrinks} clickFn={clickFn} />
    </>
  );
};
