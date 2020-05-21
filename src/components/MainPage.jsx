import React, { useState } from "react";
import RandomButton from "./RandomButton.jsx";
import SearchByIngredient from "./SearchByIngredient.jsx";
import DrinksDisplay from "./DrinksDisplay.jsx";
import DrinkModalPortal from "./DrinkModal.jsx";
import "../styles/MainPage.css";

// import modal later

export default function MainPage() {
  const [ingredient, setIngredient] = useState("");
  const [drinkResults, setDrinkResults] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [drinkId, setDrinkId] = useState("");
  const [fullDrinkInfo, setFullDrinkInfo] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  // we need to somehow detect when drinkResults changes
  // whenever drinkResults changes and is NOT a string
  // update DrinksDisplay

  return (
    <div className="MainPage">
      <div className="allButtons">
        <RandomButton
          className="randomButton"
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
        setShowModal={setShowModal}
        drinkId={drinkId}
        setDrinkId={setDrinkId}
        fullDrinkInfo={fullDrinkInfo}
        setFullDrinkInfo={setFullDrinkInfo}
        youtubeLink={youtubeLink}
        setYoutubeLink={setYoutubeLink}
      />
      <div>
        {showModal ? (
          <DrinkModalPortal
            showModal={showModal}
            setShowModal={setShowModal}
            drinkId={drinkId}
            fullDrinkInfo={fullDrinkInfo}
            setFullDrinkInfo={setFullDrinkInfo}
            youtubeLink={youtubeLink}
            setYoutubeLink={setYoutubeLink}
          />
        ) : null}
      </div>
    </div>
  );
}
