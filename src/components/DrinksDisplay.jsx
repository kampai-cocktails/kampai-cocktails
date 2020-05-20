import React, { useState } from "react";

export default function DrinksDisplay(props) {
  console.log(typeof props.drinkResults);
  //const drinksArray = props.drinkResults.drinks;

  function getFullCocktailInfo(idNum) {
    return fetch(
      `https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${idNum}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key":
            "8618e17941mshc832839b43572f9p1a882bjsn30e7e367eddd",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((drinkDetails) => {
        return drinkDetails;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (typeof props.drinkResults === "object") {
    return (
      <div className="imgContainer">
        I'm a div from DrinksDisplay
        {props.drinkResults.map((obj, index) => (
          <div key={index}>
            <img
              className={"drinkImg"}
              src={obj.strDrinkThumb}
              onClick={async () => {
                // do something here to display the modal
                // console.log("this is the drink obj FIND DRINK ID KEY NAME", obj);
                props.setDrinkId(obj.idDrink);
                // console.log("obj.idDrink from drinksdisplay", obj.idDrink);
                let cocktailInfo = await getFullCocktailInfo(obj.idDrink);
               // console.log(cocktailInfo.drinks[0], "<---- cocktailInfo.drinks[0]");
                props.setFullDrinkInfo(cocktailInfo.drinks[0]);
                props.setShowModal(true);
              }}
            ></img>
            <p>{obj.strDrink}</p>
          </div>
        ))}
      </div>
    );
  }
  return <div>no drinks displayed</div>;
}
