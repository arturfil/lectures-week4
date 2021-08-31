// Async Await

const createRocket = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Rocket Created");
    }, 4000);
  });
};

const trainAstronauts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Astronauts Trained");
    }, 2000);
  });
};

const calculateTrajectory = () => {
  return new Promise((resolve, reject) => {
    resolve("Calculated TraYectory");
  });
};

const goingToMars = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Arrive to Mars");
    }, 2000);
  });
};

// let createRocket = new Promise((resolve, reject) => {
//   resolve('Rocket created')
// });

// console.log(createRocket);

// createRocket.then(val => console.log(val));

const missionToMars = async () => {
  try {

    // promiseCook()
    //  .then(val => console.log(val))
    const created = await createRocket();
    console.log(created);
    
    const trained = await trainAstronauts();
    console.log(trained);

    const calculated = await calculateTrajectory();
    console.log(calculated);

    const travelling = await goingToMars();
    console.log(travelling);
    
  } catch (error) {
    console.log(error);
  }
};

missionToMars();
