import React, { useState } from "react";

export default function DrinksDisplay(props) {
  console.log(typeof props.drinkResults);
  //const drinksArray = props.drinkResults.drinks;
  if (typeof props.drinkResults === "object") {
    return (
      <div className="imgContainer">
        I'm a div from DrinksDisplay
        {props.drinkResults.map((obj, index) => (
          <img
            className={"drinkImg"}
            key={index}
            src={obj.strDrinkThumb}
            onClick={() => {
              // do something here to display the modal
            }}
          ></img>
        ))}
      </div>
    );
  }
  return <div>no drinks displayed</div>;
}
