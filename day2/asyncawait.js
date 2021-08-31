const createPizzaDough = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("created the dough...");
      resolve();
    }, 3000);
  });
};

const addIngredients = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Added pepperoni");
      resolve();
    }, 2000);
  });
};

const bakeThePizza = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Finished baking the pizza...");
      resolve();
    }, 1000);
  });
};

async function makePizza() {
  await createPizzaDough();
  await addIngredients();
  await bakeThePizza();
  console.log("We are done");
}

makePizza();
