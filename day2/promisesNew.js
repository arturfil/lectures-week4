let waterStartedBoiling = true;

const boilWater = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (waterStartedBoiling) {
        resolve("Water finished boiling");
      } else {
        reject("Water did not boil");
      }
    }, 3000);
  });
};

let grindCoffee = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Grindindg coffee done");
    },1000);
  });
};

// Promise All Attempt
boilWater()
  .then(val => console.log(val))
  .then(grindCoffee)
  .then(val => console.log(val))
  .catch(err => console.log(err));
