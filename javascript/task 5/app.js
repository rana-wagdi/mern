// alert("Rana")

let href = document.getElementById('traineeAnchor');
let img = document.querySelectorAll('img');
let imgSlide = document.querySelectorAll('.image_item');


 console.log(img)

href.setAttribute("href","training.com");

href.innerText="training"

//  let liElementObject=document.createElement("li");
// liElementObject.innerText="ITI";

// setAttribute("style","border: 1px solid black");
for (var i = 0; i < img.length;  i++) {
    img[i].setAttribute("style","border: 2px solid black");
}


// ///////////////////////////
// // function next img
// document.getElementById("next").addEventListener("click", nextImg);
// function nextImg(){
//     for (var i = 0; i < imgSlide.length;  i++) {
//         imgSlide[i].setAttribute("style","border: 2px solid black");
    
        
    
//         if ( i< imgSlide[i]) {
//             i++;    
//         }
//         else {
//             i=0;    
//         }
//         document.getElementById("slides").src = imgSlide[i]; 
//     }

   
//  }

    




document.getElementById("send").onclick = function() {
    let chekboxs = document.getElementsByName('hoppy')
        for( chekbox of chekboxs){
            chekbox.checked = chekboxs.checked;
        alert(chekbox.value)
    }
}

let example = document.getElementById('example')

example.style.backgroundColor="pink"
// let  input=document.querySelector("input").value;
// // let spanErrorOfAge=document.querySelector("span")

// let supmit = document.getElementById("button_submit");


// function myFunction(){

//     let texts;


//     if ( isNaN(input) || input< 1){

//         texts = "Input not valid";
//         // texts.style.Color ="red"
//     }else{
//         texts = "Input OK";
//     }
//     document.getElementById('demo').innerHTML= texts;
//     console.log(texts)
    
// }

// var age=document.getElementsByName('age').value;

// Convert user entered age to a number
//check if age is a number or less than or greater than 100
var valid = true;

function myFunction(){

    var age = document.getElementById("age").value;
    var grade =document.getElementById("grade").value
if (age < 20 || age > 40)
{
       alert("enter age between 20 to 40")
      return false
}
if (grade < 0 || grade > 100)
{
       alert("enter grade between 0 to 100")
       
}
}


let slideShow = document.getElementById('slideShow')
let next = document.getElementById('next')
let previous =document.getElementById('previous')

slideShow.addEventListener('click', changeImg)
var i = 0;

var images = [];


images[0] = 'images/1.jpg';
images[1] = 'images/2.jpg';
images[2] = 'images/3.jpg';





function changeImg(){

    document.slide.src = images[i];

    if (i < images.length -1){
        i++;
    } else {
        i=0;
    }
    setTimeout("changeImg()", 1000)
}

//////////////next
next.addEventListener('click', nextImg);
function nextImg(){

    document.slide.src = images[i];

    if (i < images.length-1 ){
        i++;
    } else {
        i=0;
    }

    
}
previous.addEventListener('click', preImg);
function preImg(){

    document.slide.src =  images[i];
 
    
    if (i < (images.length)- 1 ){
        i++;
    } else {
        i=0;
    }
    
}


// previous.addEventListener('click', preImg);
// function preImg(){

//     document.slide.src =  images[i];
 
    
//     if (i > images[i] - 1 ){
//         i--;
//     } else {
//         i=0;
//     }
    
// }
// window.onload = changeImg;

// var imgs = document.getElementsByClassName('slides').src;
// console.log(imgs)

// function changeImg(){
//     for(var i=0; i <imgs.length; i++ ){
//         if(imgd[i] < imgs.length-1){
//             i++
//         }else {
//             i=0;
//         }
//     }setTimeout("changeImg()", 10000)
// }


// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("fake").src;
 
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    

//   slides[slideIndex-1].style.display = "block";  
  
//   setTimeout(showSlides, 1000); // Change image every 2 seconds
// }

// document.querySelector("table.bPink").setAttribute("style","color:red");



/*The setInterval() method, offered on the Window and Worker interfaces,
 repeatedly calls a function or executes a code snippet, with a
  fixed time delay between each call.*/


//   var count = prompt("Enter Time");


// document.getElementById("pro").innerHTML=`The time is: ${count} Minute`;

//   let time = count *60;

//   let countTime = setInterval(countDown, 1000);

// let start = document.getElementById('start_button')

// function countDown(){
//   const minutes = Math.floor(time/60);
//   let seconds = time % 60;
//   document.getElementById('count').innerHTML=` ${minutes}: ${seconds}`;

// time--;
// if (time === 0){
//   clearInterval(countTime);
  
//   alert("You're out of time!");
// }
// }
