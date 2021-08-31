// 

const createRocket = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Rocket Created')
      resolve()
    }, 4000)
  }) 
}


const trainAstronauts = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      reject('Something went wrong with the astronauts')
    } else {
      setTimeout(() => {
        console.log('Astronauts Trained')
        resolve()
      }, 2000)
    }
  })
}

const calculateTrajectory = () => {
  return new Promise((resolve, reject) => {
    console.log('Calculated TraYectory')
    resolve();
  });
}

const goingToMars = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Arrive to Mars')
      resolve();
    }, 2000)
  })
}

// let createRocket = new Promise((resolve, reject) => {
//   resolve('Rocket created')
// });

// console.log(createRocket);

// createRocket.then(val => console.log(val));

const missionToMars = async () => {
  try {
    await createRocket();
    await trainAstronauts();
    await calculateTrajectory();
    await goingToMars();
  } catch (error) {
    console.log(error)
  }
}

missionToMars();