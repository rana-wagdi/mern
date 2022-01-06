// let squre1 = document.querySelector('.square1')


// squre1.addEventListener('click', function(){
   
//    let rana = document.querySelector('.square1');
//    var cln = rana.cloneNode(true);
//    document.getElementsByClassName("copy")[0].appendChild(cln);
//     // event.stopPropagation();

// },{once:true})
// let squre2 = document.querySelector('.square2')



// squre2.addEventListener('click', squree2)
// function squree2(){
//    let rana = document.querySelector('.square2');
//    var cln = rana.cloneNode(true);
//    document.getElementsByClassName("copy")[0].appendChild(cln);

// ({once:true})}
// // squre2.addEventListener('click', function(){
   
  



// let squre3 = document.querySelector('.square3')


// squre3.addEventListener('click', function(){
   
//    let rana = document.querySelector('.square3');
//    var cln = rana.cloneNode(true);
//    document.getElementsByClassName("copy")[0].appendChild(cln);
//     // event.stopPropagation();
//     // squre1.cloneNode(true)

// },{once:true})
// // let copy = document.querySelectorAll('.copy')[0]


// // squre3.addEventListener('click', function(){
   
// //    let rana = document.querySelectorAll('.copy')[0];
// //    var cln = rana.cloneNode(true);
// //    document.getElementsByClassName("copyy")[0].append(cln);
// //     // event.stopPropagation();
// //     // squre1.cloneNode(true)

// // },{once:true})



// let createDiv =document.createElement('div');
let firstDiv = document.body.createElement('div')

function tryToCreate(value){

let createDivs =document.createElement('div');
   
   createDivs.classList.add(value)
   firstDiv.append(createDivs)
   console.log(createDivs)

   return createDivs
}

tryToCreate('square1')
tryToCreate('square2')
tryToCreate('square3')



