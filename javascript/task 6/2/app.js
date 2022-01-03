let squre1 = document.querySelector('.square1')


squre1.addEventListener('click', function(){
   
   let rana = document.querySelector('.square1');
   var cln = rana.cloneNode(true);
   document.getElementsByClassName("copy")[0].appendChild(cln);
    // event.stopPropagation();
    // squre1.cloneNode(true)

},{once:true})
let squre2 = document.querySelector('.square2')


squre2.addEventListener('click', function(){
   
   let rana = document.querySelector('.square2');
   var cln = rana.cloneNode(true);
   document.getElementsByClassName("copy")[0].appendChild(cln);
    // event.stopPropagation();
    // squre1.cloneNode(true)

},{once:true})

let squre3 = document.querySelector('.square3')


squre3.addEventListener('click', function(){
   
   let rana = document.querySelector('.square3');
   var cln = rana.cloneNode(true);
   document.getElementsByClassName("copy")[0].appendChild(cln);
    // event.stopPropagation();
    // squre1.cloneNode(true)

},{once:true})
let copy = document.querySelectorAll('.copy')[0]


squre3.addEventListener('click', function(){
   
   let rana = document.querySelectorAll('.copy')[0];
   var cln = rana.cloneNode(true);
   document.getElementsByClassName("copyy")[0].append(cln);
    // event.stopPropagation();
    // squre1.cloneNode(true)

},{once:true})





