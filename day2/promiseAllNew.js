const makeDough = () => {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      console.log('Dough is done');
      resolve();
    },3000)
  })
};

const addIngredients = () => {
  new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log('Added ingredients');
    }, 2000);

  })
}

const bakeInOven = () => {
  new Promise((resolve, reject) =>{ 
    console.log('Finished baking');
    resolve();
  })
}

Promise.all([makeDough(), addIngredients(), bakeInOven()])
  .then(() => {
    console.log('Finished all tasks');
  });