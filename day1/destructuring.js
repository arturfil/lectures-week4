const movie = {
  title: "Shrek 2",
  studio: "DreamWorks",
  characters: [
    "Burro",
    "Shrek",
    "Fiona",
    "Muñeco de Gengibre",
    "Dragon",
  ],
  context: "Shrek's Swamp",
  durationHours: 1.3,
  rating: "10/10",
  rated: "PG13ish",
  song: "I need a Hero",
};

// console.log(movie.title);
// console.log(movie.characters[0]);
// console.log(movie.characters[0].name);

const {
  title,
  // title: title,
  studio,
  characters: characters,
  context: place,
  durationHours,
  rating,
  rated,
  song,
} = movie;


const [burro, second, third, fourth, fifth] = characters;

const cars = ['Ferrari', 'McClaren', 'Porsche', 'Pagani', 'Koenigseg'];
const [ferrari, mc, porsche, pagani, koeniseg] = cars;

// console.log(ferrari);

const bikes = ['mountain bike', 'bmx', 'road'];

const transports2 = [cars, bikes]; // nested arrays
const transports = [...cars, ...bikes]; 



// cars.forEach(car => {
//   console.log(car);
// })

// for(let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// console.log(transports2);
// console.log(transports);

// console.log(cars);
// console.log(transports);

// spread operator ...arrayName
let dogs = ['dog1', 'dog2', 'dog3'];
// console.log(...dogs);

let cats = ['cat1', 'cat2', 'cat3'];

let pets = [...cats, ...dogs]
// console.log(...pets);

// mixed destructuring
const customer = {
  name: {
    firstName: 'Bruno',
    lastName: 'Fernandes'
  },
  age: 26,
  preference: [
    {
      postions: ['striker', 'creative midfield'],
      foods: ['bacalao', 'branzino']
    }
  ]
}

// const { name: {firstName, lastName}, age } = customer;
// console.log(`Fullname is ${firstName} ${lastName}`);


// rest parameters


let check = [
  {meal: 'pastor burrito', price: 7},
  {meal: 'falafel wrap', price: 9},
  {meal: 'portobello burger', price: 8},
  {meal: 'pierogies', price: 7},
];


const sum = (...numbers) => {
  let total = numbers.reduce((acc, number) => {
    return acc + numbers;
  }, 0)
  return total;
}

function print() {
  for (let i = 0; i < arguments.length; i++) {
    console.log("Hello ", arguments[i])
  }
}

// console.log(sum(1,2,3,4));
// console.log(sum(check));

const greetEveryone = (...names) => {
  names.forEach(name => {
    console.log(`Hello ${name}`);
  })
}

// greetEveryone('Arturo', 'Andriw', 'Alvin', 'Alfredo', 'Matias', 'Kevin');


print('Arturo', 'Thomas')