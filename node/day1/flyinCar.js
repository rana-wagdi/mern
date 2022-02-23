const Car = require("./carModule");


class flingCar extends Car{
    constructor(model,year, canFly){
    super(model, year)
    this.canFly=canFly

    }
    get fun(){

        return `I can fly ${this.canFly}`
    }
}


module.exports = flingCar