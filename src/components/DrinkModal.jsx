import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/modal.css";

function checkIngredients(fullDrinkInfo) {
  let newArray = [];

  for (let key in fullDrinkInfo) {
    if (fullDrinkInfo[key] !== null && key.startsWith("strIngredient")) {
      newArray.push(fullDrinkInfo[key]);
    }
  }

  console.log(newArray);

  // return newArray;
  return (
    <div className="ingredientListContainer">
      Ingredients
      <ul className="ingredientList">
        {newArray.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

function DrinkModal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>IM A SEXY MODAL</h3>
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
