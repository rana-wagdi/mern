export default class Car{
    constructor(model, year){
        this.model =model
        this.year = year
    }
}


export function toString(car){

    console.log(`car model ${car.model} in ${car.year}`)
}

// let carsModel = new Car ("pmw", 1255);
// let createElm =document.createElement("div");
// createElm.innerHTML=`<p>Cars Model ${carsModel.model}  years ${carsModel.year}</p>`
// console.log(createElm)
// document.body.appendChild(createElm);
// console.log(carsModel)
// export default createElm;
// // export default carsModel;
