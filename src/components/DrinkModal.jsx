import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import "../styles/modal.css";
import useOutsideClick from "./useOutsideClick";

function checkIngredients(fullDrinkInfo) {
  let measureIngredientPairs = {};

  for (let i = 1; i <= 15; i++) {
    if (
      fullDrinkInfo[`strIngredient${i}`] !== null &&
      fullDrinkInfo[`strIngredient${i}`] !== ""
    ) {
      measureIngredientPairs[fullDrinkInfo[`strIngredient${i}`]] =
        fullDrinkInfo[`strMeasure${i}`];
    }
  }

  return (
    <div className="ingredientListContainer">
      Ingredients
      {Object.keys(measureIngredientPairs).map((key) => {
        if (!measureIngredientPairs[key]) {
          return (
            <>
              <p className="individualIngredient" value={key}>
                <a
                  href={`https://search.rakuten.co.jp/search/mall/${key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {key}
                </a>{" "}
                - {"To taste"}
              </p>
            </>
          );
        } else {
          return (
            <>
              <p className="individualIngredient" value={key}>
                <a
                  href={`https://search.rakuten.co.jp/search/mall/${key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {key}
                </a>{" "}
                - {measureIngredientPairs[key]}
              </p>
            </>
          );
        }
      })}
    </div>
  );
}

function fetchYoutubeLink(drink) {
  return fetch(
    `https://youtube-search-results.p.rapidapi.com/youtube-search/?q=how%20to%20make%20${drink}%20drink`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY_ALTERNATE,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((youTubeInfo) => {
      return youTubeInfo;
    })
    .catch((err) => {
      console.log(err);
    });
}

function DrinkModal(props) {
  const [youtubeLink, setYoutubeLink] = useState("");
  const ref = useRef();
  useOutsideClick(ref, () => {
    props.setShowModal(false);
  });
  return (
    <div className="modal">
      <div
        className="modal-content"
        ref={ref}
        onMouseEnter={async () => {
          let youtubeObj = await fetchYoutubeLink(props.fullDrinkInfo.strDrink);
          setYoutubeLink(youtubeObj.items[1].link);
        }}
      >
        <img
          className="modalImage"
          src={props.fullDrinkInfo.strDrinkThumb}
          alt={props.fullDrinkInfo.strDrink}
        ></img>
        <div className="drinkName">{props.fullDrinkInfo.strDrink}</div>
        <hr></hr>
        <p className="alcoholContent">
          Alcoholic or non-alcoholic? {props.fullDrinkInfo.strAlcoholic}
        </p>
        <p className="glassType">
          Type of glass? {props.fullDrinkInfo.strGlass}
        </p>

        <p className="drinkCategory">
          Category: {props.fullDrinkInfo.strCategory}{" "}
        </p>

        <hr></hr>
        {checkIngredients(props.fullDrinkInfo)}
        <hr></hr>
        <p className="instructions">
          Instructions: {props.fullDrinkInfo.strInstructions}
        </p>
        <p>
          Click{" "}
          <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
            here
          </a>{" "}
          to watch a tutorial video on making the drink!
        </p>
        <button
          type="button"
          className="button"
          onClick={() => {
            console.log("typeof setshowmodal:", typeof setShowModal);
            props.setShowModal(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

function DrinkModalPortal(props) {
  return ReactDOM.createPortal(DrinkModal(props), document.body);
}

export default DrinkModalPortal;
