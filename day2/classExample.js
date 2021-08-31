class Ronaldo {
  constructor(money) {
    this.kids = [];
    this.cars = ['Chrevolet'];
    this.money = money;
  }

  addCar(newCar) {
    this.cars.push(newCar)
  }
}

const cr7 = new Ronaldo('1,000,000');
console.log(cr7.cars);
cr7.addCar('Audi');
console.log(cr7.cars);