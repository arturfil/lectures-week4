// callbacks
// const getTotal = (callback) => {
//   let tot = 10;
//   callback(tot);
// };

// const get50Percent = (val) => console.log(val * 0.50); 
// getTotal(get50Percent)

// const loan = new Promise((resolve, reject) => {
//   resolve('You can borrow more money!');
// });

// loan.then(val => console.log(val))

// functions
const getPercent = (num, percent) => {
  console.log(`The ${percent * 100}% of $${num} is: $${num * percent}`);
  return num * percent;
}

// add functions
const add = (...nums) => {
  let total = nums.reduce((acc, num) => {
    return acc + num;
  }, 0);
  return total;
}

// promises
// const p = new Promise((resolve, reject) => resolve('Ironhack'));
// p.then((val) => console.log(val)); // Ironhack

const moneyToPay = new Promise((resolve, reject) => {
  if (typeof add(1,5) !== "number") {
    reject("Input vavlue not valid");
  }
  resolve(add(1,5));
});

// moneyToPay
//   .then(result => getPercent(result, 0.18))
//   .catch(val => {
//     console.log(val);
//   });

