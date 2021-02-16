import React from "react";

export default function SearchByIngredient(props) {
  // drinks by ingredient API
  function searchByIngredient(ingredient) {
    return fetch(
      `https://the-cocktail-db.p.rapidapi.com/filter.php?i=${ingredient}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
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
          className="input"
          placeholder="type an ingredient"
          onChange={(e) => {
            props.setIngredient(e.target.value);
          }}
          value={props.ingredient}
        ></input>
        <button
          type="submit"
          className="buttons"
          onClick={async (e) => {
            e.preventDefault();
            e.target.value = "";
            // send ingredient string to API function call
            let drinksObj = await searchByIngredient(props.ingredient);
            if (drinksObj) {
              props.setDrinkResults(drinksObj.drinks);
              props.setSearchError(false);
            } else if (!drinksObj) {
              props.setSearchError(true);
            }
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
