const carModule= require("./carModule");
const carfly= require("./flyinCar")

const carsModel = new carModule("pmw", 1255);

const carFlying = new carfly("pmw", 1255, true);



console.log(carsModel.fun)
console.log(carFlying.fun)


