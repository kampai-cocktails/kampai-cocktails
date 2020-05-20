import React from "react";
/*
Button is connected to NavBar/WeatherDisplay...

Hard Code Weather Cocktail Drinks

*/

export default function WeatherRecButton() {
  return (
    <button
      className="weatherRecButton"
      onClick={() => {
        // do something in here that calls the weather rec drink API
        // then displays 6 drinks based on the weather
      }}
    >
      Weather Recommendations Drink!
    </button>
  );
}
