class Car{
    constructor(model, year){
        this.model =model
        this.year = year
      
    }
    get fun(){

        return `car model ${this.model} in ${this.year}`
    }

}


module.exports = Car













//module1
// console.log("Start");
// let projectID=90;

// exports.ID=projectID;  //shortCUT
// projectID=999;
// module.exports.projectName="ITI"

// module.exports=function(){console.log("main")}
// exports.ID=projectID;  
// module.exports.projectName="ITI"

// console.log(module);
// 222

// const module1=require("./module1");

// console.log(module1);
// module1();
// console.log(module1.projectID)
// console.log(module1.ID)
// console.log(module);


//app
// const http=require("http")
//const path=require("path")
// const file=require("fs")
// const express=require("express")
// console.log("HI");
//endPoints
//http://localhost:8080/home
//http://localhost:8080/students/1  get
//http://localhost:8080/students  post
//http://localhost:8080/students?name=eman&email get

// express()

// http.createServer((request,response)=>{
// request.url=="/students"  request.method=="get"





// }).listen(8080)