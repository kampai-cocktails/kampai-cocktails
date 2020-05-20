import React from "react";
import RandomButton from "./RandomButton.jsx";
import WeatherRecButton from "./WeatherRecButton.jsx";
import SearchButton from "./SearchButton.jsx";

// import modal later

export default function MainPage() {
  return (
    <>
      <RandomButton className="randomButton" />
      <WeatherRecButton />
      <input type="text"></input>
      <SearchButton />
    </>
  );
}
