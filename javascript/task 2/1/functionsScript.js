// alert("Rana");

// 1- Create function name it printVariables(value1,value2,value3) (as 
//     function declaration) takes 3 parameters and return them as an 
//     Array




// local variables are not accessible outside function’s block.


// b- Try to call the function before definition line?

console.log(printVariables(10,20,40));// it's call

function printVariables(value1, value2, value3=""){

    return [value1, value2, value3];
}


// c- Call the function with 3 values then print the return
console.log(printVariables(10,20,40));


// d- Try to call the function with less than 3 parameters 
// printVariables(3,5) .
// Then solve the problem of undefined variables 
console.log(printVariables(10,20));

// i will solve it by make doble quotes like that

// function printVariables(value1, value2, value3=""){
    
//     return [value1, value2, value3];
// }


// What if you call the function with too many parameters ? (nore 
//     than 3)
//     Can you print them using (arguments)

console.log(printVariables(10,20,40,50,60)); /// if i call more than three thay take just three

// Can you print them using (arguments)? ------>if i print argument thy will appear the full value not just three


// --------------
// function printVariables(value1, value2, value3=""){
//     console.log(arguments)
//    return [value1, value2, value3];
// }
// console.log(printVariables(50,20,40,50,60)); 




// f- Define var localVar=3; testingVar=5; inside the function’s block
// Before calling the function try to console.log the values localVar 
// and testingVar.?



// ----> there is an error (Uncaught ReferenceError: localVar is not defined)



// g- In step f , call the function and try to print localVar and
// testingVar?
// ------------
// function printVariables(value1, value2, value3=""){
 
//     var localVar = 3;
//     var testingvar = 5;

//     console.log(localVar, testingvar)
//     return [value1, value2, value3];
// }


// console.log(localVar);
// console.log(testingvar);



// c- Call the function with 3 values then print the return
// console.log(printVariables(10,20,40), localVar ,testingvar);


// ---> var is show just in scope they cant print out of it


// ------------------------------------------------------------------------------------------------------

// h- Define the following variable on your script outside the function 
// let localVar=90

 let localVar = 90;

function printVariables(value1, value2, value3){

//     o Now try to console.log the value of localVar inside the 
// function but before variable’s definition line.

      


    // console.log("localvar is inside "+ localVar);  -----> with out let they elso work
    //  ----> there is an error (functionsScript.js:108 Uncaught ReferenceError: Cannot access 'localVar' before initialization
    // at printVariables (functionsScript.js:108)
    // at functionsScript.js:15)
    return [value1, value2, value3];
}
// o Before calling the function try to console.log the value
// localVar
console.log("localvar is before " + localVar)
console.log(printVariables(10,20,40));

// o then try to console.log localVar after calling the fucntion
console.log("localvar is after " + localVar)




// 2- Repeat step 1 but define the function as function expression 

result= ""

let valuess = function(value1, value2, value3){
    return [value1, value2, value3];
}

 
console.log(valuess(80,20,40));



// 3- Repeat step 1 but define the function as arrow function


let val = (value1, value2, value3 )=>{

    return [value1, value2, value3];
}
console.log(val(1000,20,40));