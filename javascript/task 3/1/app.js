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





