let waterNotReady = true;

// Promise Chaining
let boilWater = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Boiling Water Done');
      resolve();
    }, 5000)
  });
}

let grindCoffee = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (waterNotReady) {
        reject('You were lied to, water is not ready')
      } 
      resolve('Finished grinding Coffee');
    }, 1000);
  })
}

let brewCoffee = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{ 
      console.log('Brewing coffee');
      resolve();
    }, 3000)
  })
}

boilWater()
  .then(grindCoffee)
  .then(val => console.log(val))
  .then(brewCoffee)
  .catch(err => console.log(err))
  .finally(() => console.log("Finished making cup of coffee"));