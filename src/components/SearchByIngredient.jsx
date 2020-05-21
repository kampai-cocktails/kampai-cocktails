import React, { useState } from "react";
import DrinksDisplay from "./DrinksDisplay.jsx";

export default function SearchByIngredient(props) {
  //const [drinkResults, setDrinkResults] = useState("");

  // console.log("drinkResults outside onClick", drinkResults);

  // drinks by ingredient API
  function searchByIngredient(ingredient) {
    return fetch(
      `https://the-cocktail-db.p.rapidapi.com/filter.php?i=${ingredient}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key":
            "8618e17941mshc832839b43572f9p1a882bjsn30e7e367eddd",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((drinks) => {
        return drinks;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="searchByIngredient">
      <form>
        <input
          type="text"
          placeholder="type an ingredient"
          onChange={(e) => {
            props.setIngredient(e.target.value);
          }}
          value={props.ingredient}
        ></input>
        <button
          type="submit"
          onClick={async (e) => {
            // send ingredient string to API function call
            e.preventDefault();
            let drinksObj = await searchByIngredient(props.ingredient);
            props.setDrinkResults(drinksObj.drinks);
            // console.log("this is drinkResults:", drinksObj);
            // console.log(drinkArray, "<---- drinkArray");
          }}
        >
          Search for A Drink
        </button>
      </form>
    </div>
  );
}
