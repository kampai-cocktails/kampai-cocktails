import React from "react";

export default function SearchButton() {
  return (
    <button
      className="searchButton"
      onClick={() => {
        // do something in here that calls the search by ingredient API
        // then displays 6 drinks with the ingredient
      }}
    >
      Search by Ingredient!
    </button>
  );
}
