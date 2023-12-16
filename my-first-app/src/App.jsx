import React from "react";
import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";
import { Button } from "./components/UI/Button";

export const App = () => {
  const greeting = "Welcome to our Funkie cafe!";
  const [userDrink, setUserDrink] = React.useState();

  const resetChoice = () => {
    setUserDrink(null);
  };

  return (
    <div className="App">
      {userDrink ? (
        <>
          <DrinkChoice drink={userDrink} />
          <Button text="Reset Choice" onClick={resetChoice} />
        </>
      ) : (
        <>
          <h1>{greeting}</h1>
          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}
    </div>
  );
};
