import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/modal.css";

// function getRakutenProduct(ingredient) {
//   return fetch(
//     `https://rakuten_webservice-rakuten-marketplace-product-search-v1.p.rapidapi.com/services/api/Product/Search/${ingredient}`,
//     {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host":
//           "rakuten_webservice-rakuten-marketplace-product-search-v1.p.rapidapi.com",
//         "x-rapidapi-key": "8618e17941mshc832839b43572f9p1a882bjsn30e7e367eddd",
//       },
//     }
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((product) => {
//       console.log(product);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

function checkIngredients(fullDrinkInfo) {
  let measureIngredientPairs = {};

  for (let i = 1; i <= 15; i++) {
    if (fullDrinkInfo[`strIngredient${i}`] !== null) {
      measureIngredientPairs[fullDrinkInfo[`strMeasure${i}`]] =
        fullDrinkInfo[`strIngredient${i}`];
    }
  }

  return (
    <div className="ingredientListContainer">
      Ingredients
      {Object.keys(measureIngredientPairs).map((key) => (
        <p className="individualIngredient" value={key}>
          {key} -
          <a
            href={`https://search.rakuten.co.jp/search/mall/${measureIngredientPairs[key]}`}
            target="_blank"
          >
            {measureIngredientPairs[key]}
          </a>
          {/* {getRakutenProduct(measureIngredientPairs[key])} */}
        </p>
      ))}
    </div>
  );
}

function DrinkModal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        {/* <h3>IM A SEXY MODAL</h3> */}
        <img
          className="modalImage"
          src={props.fullDrinkInfo.strDrinkThumb}
        ></img>
        <div className="drinkName">{props.fullDrinkInfo.strDrink}</div>
        <hr></hr>
        <p className="alcoholContent">
          Is there alcohol? {props.fullDrinkInfo.strAlcoholic}
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
        <button
          type="button"
          onClick={() => {
            console.log("typeof setshowmodal", typeof setShowModal);
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
