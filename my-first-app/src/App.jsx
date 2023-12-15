import React from "react";
import { useState } from "react";
import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { coffee, tea } from "./utils/data";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";
import { TextInput } from "./components/UI/TextInput";

export const App = () => {
  const greeting = "Welcome to our cafe!";
  const [userDrink, setUserDrink] = useState(null);

  return (
    <div className="App">
      {userDrink ? (
        <>
          <DrinkChoice drink={userDrink} />
        </>
      ) : (
        <>
          <h1>{greeting}</h1>
          <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
          <DrinkSearch />
        </>
      )}
    </div>
  );
};
