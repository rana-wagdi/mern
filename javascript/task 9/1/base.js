import Car, { toString as printCar } from './car.js';
import FlyingCar,{toString as printFly}  from './flyingCar.js';

const carsModel = new Car("pmw", 1255);
let createElm = document.createElement("div");
createElm.innerHTML = `<p>Cars Model ${carsModel.model}  years ${carsModel.year}</p>`
const carFly = new FlyingCar("pmw", 1255, true);
carFly.innerHTML = `<p>Cars Model ${carsModel.model}  years ${carsModel.year}</p>`

// document.body.appendChild(createElm);

// console.log(carsModel);

printCar(carsModel);
printFly(carFly)