// alert("Rana");


let userName = "";

function studentGrads() {

    while (userName.length < 1) {

        userName = prompt("Please Enter You user Name");

    }



    
   let sum =0;


   
    let grads= prompt("Enter your Grads").split(",");
    for(var i = 0; i < grads.length; i++){
 

        sum += +grads[i];
        console.log(sum)

     }  
    
    
    
    let avrageGrade = Math.floor( sum/grads.length);

console.log(avrageGrade)


console.log("average", avrageGrade)

    alert(`Hello${userName}`)
      

}

 

studentGrads()