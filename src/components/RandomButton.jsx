import React from "react";
import { getRandomDrink } from "../api.js";

export default function RandomButton() {
  return (
    <button
      className="randomButton"
      onClick={() => {
        // do something in here that calls the random drink API
        // then displays 6 random drinks
      }}
    >
      Random Drink!
    </button>
  );
}
