/*
  - time 3000 - Cook ingredients
  - time 1000 - Scramble egss
  - time 4000 - Cook the Omellets
  - time 1000 - automatic make coffee
  -----------------------------------
  - Normal promises .then()
  - Async Await 

*/

let coockIngredients = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Cook Ingredients");
    }, 3000);
  });
};

let scrambleEggs = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Scramble Eggs");
    }, 1000);
  });
};

coockIngredients()
  .then(val => console.log(val))
  .then(scrambleEggs)
  .then(val => console.log(val))
