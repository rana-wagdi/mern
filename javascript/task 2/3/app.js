// alert("Rana");


let userName = "";
let grads=";"

function studentGrads() {

    while (userName.length < 1) {

        userName = prompt("Please Enter You user Name");

    }



    
   let sum =0;

//    do{
//     grads= prompt("Enter your Grads").split(",");

//     console.table(grads)
//     for(var i = 0; i < grads.length; i++){
 

//         sum += +grads[i];
//         console.log(sum)
//     }while (isNaN(grads[i])==true)
//      }  
//      break;

grads= prompt("Enter your Grads").split(",");
for(var i = 0; i < grads.length; i++){
   
    
    while(isNaN(grads[i])==true){
        grads= prompt("Enter your Grads").split(",");

    }
    sum += +grads[i];
    console.log(sum)
}



    
    
    
    
    let avrageGrade = Math.floor( sum/grads.length);

console.log(avrageGrade)


console.log("average", avrageGrade)

    alert(`Hello ${userName}`)
    alert(`Your avreage is ${avrageGrade}`)

      

}

 

studentGrads()