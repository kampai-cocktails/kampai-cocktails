import React, { useState } from "react";
import RandomButton from "./RandomButton.jsx";
import WeatherRecButton from "./WeatherRecButton.jsx";
import SearchByIngredient from "./SearchByIngredient.jsx";
import DrinksDisplay from "./DrinksDisplay.jsx";

// import modal later

export default function MainPage() {
  const [ingredient, setIngredient] = useState("");
  const [drinkResults, setDrinkResults] = useState("");

  // we need to somehow detect when drinkResults changes
  // whenever drinkResults changes and is NOT a string
  // update DrinksDisplay

  return (
    <>
      <div className="allButtons">
        <RandomButton
          className="randomButton"
          drinkResults={drinkResults}
          setDrinkResults={setDrinkResults}
        />
        <WeatherRecButton
          className="weatherRecButton"
          drinkResults={drinkResults}
          setDrinkResults={setDrinkResults}
        />
        <SearchByIngredient
          className="searchByIngredient"
          setIngredient={setIngredient}
          ingredient={ingredient}
          drinkResults={drinkResults}
          setDrinkResults={setDrinkResults}
        />
      </div>
      <DrinksDisplay
        drinkResults={drinkResults}
        setDrinkResults={setDrinkResults}
      />
    </>
  );
}
