// random drink API
function getRandomDrink() {
  let randomDrink;

  fetch("https://the-cocktail-db.p.rapidapi.com/random.php", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
      "x-rapidapi-key": "8618e17941mshc832839b43572f9p1a882bjsn30e7e367eddd",
    },
  })
    .then((response) => {
      //console.log(response);
      randomDrink = response;
    })
    .catch((err) => {
      console.log(err);
    });

  return randomDrink;
}

// drinks by ingredient API
function searchByIngredient(ingredient) {
  let drinksByIngredient;

  fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${ingredient}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
      "x-rapidapi-key": "8618e17941mshc832839b43572f9p1a882bjsn30e7e367eddd",
    },
  })
    .then((response) => {
      // console.log(response);
      drinksByIngredient = response;
    })
    .catch((err) => {
      console.log(err);
    });
  return drinksByIngredient;
}

// drinks based on the weather API
// this will need to be hardcoded

module.exports = {
  getRandomDrink,
  searchByIngredient,
};
