import Car from './car.js'
export default class FlyingCar extends Car {
    constructor(model,year, canFly){
        super(model,year)
        this.canFly=canFly;
    }
   


}
export function toString(flyingCar){

    console.log(`I can fly ${flyingCar.canFly} .`)
}