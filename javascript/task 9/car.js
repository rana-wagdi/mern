class Car{
    constructor(model, year){
        this.model =model;
        this.year = year;
    }
}

let carsModel = new Car ("pmw", 1255);
Car.innerHTML=`<p> ${this.model}</p>`
console.log(carsModel)