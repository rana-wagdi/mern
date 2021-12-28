// alert("rana");



let val1=""
let val2 ="";

function valInput() {

    val1 = prompt("enter first number","0");
     while( (val1<1) ||(isNaN(val1))){
        val1 = prompt("enter first number","0");
     }
  
     val2 = prompt("enter second number","0");
     while( (val2<1) ||(isNaN(val2))){
        val2 = prompt("enter second number","0");
     }
     
          
           
   
            
    

    
    // do {
    //     val1 = prompt("enter first number","0");
    // }while (isNaN(val1)==true)
   


  result =parseInt(val1)+ parseInt(val2);
  alert(result)

         
     }
 valInput();

    // do{


    //         val1 = prompt("enter first number","0");
            
    //     if(isNaN (v)== true){
    //         val1 =  v;
    //     }
  
        // val1 = prompt("enter first number","0");
    
    // } while (val1 < 1 )




//     while (val1.length < 1 ) {
       
//         val1 = prompt("enter first number","");
           
//             while (isNaN(val1)== true){
//                 alert("Enter number Please!")
//                 val1 = prompt("please enter number");
//             }
            
//       }
//     while (val2.length < 1){
//             val2 = prompt("enter second number");
//             while (isNaN(val2)== true){
//                 alert("Enter number Please!")
//                 val2 = prompt("please enter number");
//             }
//         }

    
//   result =parseInt(val1)+ parseInt(val2);
//   alert(result)

    







// do {
//     // let val1 = "";
    // let val2 = "";

 
//  let   var1 = prompt("enter first number");
//    let var2 = prompt("enter second number");

   
// }
// while (val1.length < 1) {
//     var1 = prompt("enter first number");
// }
// while (val2.length < 1) {
//     var2 = prompt("enter second number");
// }