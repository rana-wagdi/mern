// var i = 0;

// var images = [];
// var timer = 0;

// images[0] = 'images/1.jpg';
// images[1] = 'images/2.jpg';
// images[2] = 'images/3.jpg';


// document.getElementById('stop').addEventListener('click', clearTimeout(timer))


// function changeImg(){

//     document.slide.src = images[i];

//     if (i < images.length -1){
//         i++;
//     } else {
//         i=0;
//     }
//   timer =  setTimeout("changeImg()", 1000);
 
// //   setTimer()

// document.getElementById('stop').addEventListener('click', clearTimeout(timer))
// }
// changeImg()
// document.getElementById('stop').addEventListener('click', )
// function setTimer(){
//     if (timer) {
//        // stop 
//        clearInterval( timer );
//        timer=null;
//     }
//     else {
//        timer = setInterval(changeImg(),1000);
//     }
   
// }


// 5-write function startSliding(ImgObject) which takes the image Object to be slide on the page , and start changing the image every second 
// Eman FathiIntake42to be professional :don’t make timer ID global return it from sliding function.then write another functionthat stop image sliding stopSliding(timerID)which
//  stop sliding the imageby taking the timerID as an input.Now call these functions on console to control image sliding on the pagef
// let timer = null;
// function startSliding(ImgObject){
   
//         document.slide.src = images[i];

//     if (i < images.length -1){
//         i++;
//     } else {
//         i=0;
//     }
//  timer =  setInterval("startSliding()", 1000);

// }

// startSliding();


// document.getElementById('stop').addEventListener('click', stopSliding);

// function stopSliding(){
//     if(timer){
//         clearInterval( timer );
//     }
//         // stop 
       
//         // timer=null;
//      }
//     //  else {
//     //     timer = setInterval("startSliding()",1000);
//     //  }

  
     
//     //  else {
//     //     timer = setInterval("startSliding()",1000);
//     //  }
 

// stopSliding()

var i = 0;

var images = [];


images[0] = 'images/1.jpg';
images[1] = 'images/2.jpg';
images[2] = 'images/3.jpg';



let timer;

function startSliding(){

    document.slide.src = images[i];

    if (i < images.length -1){
        i++;
    } else {
        i=0;
    }
  timer =  setTimeout("startSliding()", 1000)
}
startSliding()
console.log(timer)

document.getElementById('stop').addEventListener('click', stopSliding);

function stopSliding(){
    if(timer){
        clearInterval( timer );
    }
        // stop 
       
        // timer=null;
     }
