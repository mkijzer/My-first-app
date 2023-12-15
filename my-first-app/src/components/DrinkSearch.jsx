import React from "react";
import { useState } from "react";
import { TextInput } from "./UI/TextInput";

export const DrinkSearch = () => {
  const [searchField, setSearchField] = useState();

  return (
    <>
      <p>{`What would you like to drink?`}</p>
      <TextInput />
      <p>Search Field: {searchField}</p>
    </>
  );
};
