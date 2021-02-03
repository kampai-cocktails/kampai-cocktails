import React from "react";

export default function RandomButton(props) {
  // random drink API
  function getRandomDrink() {
    return fetch("https://the-cocktail-db.p.rapidapi.com/random.php", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((randomDrink) => {
        return randomDrink;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="randomContainer">
      <button
        className="buttons"
        type="button"
        onClick={async () => {
          let randomDrink = await getRandomDrink();
          console.log(randomDrink);
          props.setDrinkResults(randomDrink.drinks);
        }}
      >
        Random Drink!
      </button>
    </div>
  );
}
