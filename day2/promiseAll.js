// Promise.all
let sendAmazonPackage = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Amazon package left at post office");
    resolve();
  }, 3000);
});

let getToIronhack = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Arrived to Ironhack");
    resolve();
  }, 3000);
});

let startClass = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Finished class");
    resolve();
  }, 1000);
});

Promise.all([sendAmazonPackage, getToIronhack, startClass])
  .then(() => {
    console.log("Done with tasks");
  })
  .catch((err) => console.log(err))
  .finally("We are done")
