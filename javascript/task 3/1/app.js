// alert("rana")

// 1- Function accept a full name string and convert each letter of 
// first world to Capital and the remaining to small (Pascal Case).
// //Example : 'the quick brown fox' 
// //Output : 'The Quick Brown Fox'

function upperLaters(theWord){
   
let namesSplit = theWord.toLowerCase().split(" ");

let names="";

console.log(namesSplit)

for (i in namesSplit){


   names += namesSplit[i].slice(0,1).toUpperCase()+ namesSplit[i].substring(1)+" ";

   //save that

// namesSplit.push(names)




}

return names;

}

console.log(upperLaters("rana wagdi mohamed"),"test");







// 2- Function that accept a sentence and return the longest word 
// within the input
// //Example : 'Web Development Tutorial' 
// //Output : 'Development'

///////error //////////
let longWord = 0;
function lengthWord(longWord){

let words = longWord.split(" ");
console.log(words)
for(var i=0; i<words.length; i++){

    if(words[i]< longWord){
        longWord = words[i];

        
    }
  
    
}
return longWord;


}

console.log(lengthWord("web development tutorial"))




// 3- Write a JavaScript Function that returns a passed string with 
// letters in alphabetical order 
// //Example : javascript 
// //Output : aacijprstv


function alph(word){

let arr =word.split('')
//  arr.sort((a, b)=>a < b ? -1 : 1)
// arr.sort((a,b)=>{
//     if(a>b)
//     return 1;
//     else if(a<b)
//     return -1;
//     else
//     return 0;
// })
arr.sort((a,b)=>{return a-b;})
 console.log("Array After Sorting",arr);
}
console.log(alph("javascript"))





// 4- Define an array of numbers [2,1,3,2,7,2,8,4,3,6,10,9,12]

let arr =  [2,1,3,2,7,2,8,4,3,6,10,9,12];

arr.sort(function(a, b){return b - a});
console.log("asending " +arr)
arr.sort(function(a, b){return a- b});
console.log("descending " +arr);

let filterr= arr.filter((el) =>  el >5 );
console.log("filter " +filterr)

let max = Math.max.apply(Math,arr)
console.log("max number " +max)
let min = Math.min.apply(Math,arr)
console.log("max number " +min);

console.log("array multiplied" +Array.from(arr, x => x*5));

duplicate = arr.filter((value, index)=> arr.indexOf(value)== index);


console.log("deplicated" +duplicate)

console.log(arr.join('*'))


//  Sort them ascending then descending and print the result on 
// console as table.

function sortFunction(){



 asending =arr.sort(function(a, b){return b - a});

return asending;

}
sortFunction()


// 5- Write a JavaScript function to get the month name from a 
// particular date and display the result on alert.
function years(){
    let date = new Date();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let name = month[date.getMonth()];
    alert(name)
    console.log(name)
}

years()











///////////////////////////////////bones


function numbers(){


    let randomNumber = Math.ceil(Math.random()*10)
    console.log(randomNumber)
}
numbers()

// function wordLatter(word) {

//     let newWord = [];

//     newWord= word.toLowerCase().split(" ")
    

//     for(i in newWord){
//         console.log(newWord[i].slice(0,1).toUpperCase()+ newWord[i].substring(1))
//     }

//     console.log(newWord)


// }

// console.log(wordLatter("rana wagdi mohamed"));





