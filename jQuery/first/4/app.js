let a;
$('div:first').one("click",function(){

 a= $(".mystyle").append($(".square1").clone(true));
 a.one("click",function(){
  $(".mystyle").append($(".square1:first").clone(true));
})
 
})
$('div:nth-child(2)').one("click",function(){
;
 a= $(".mystyle").append($(".square2").clone(true));
 a.one("click",function(){
  $(".mystyle").append($(".square2:first").clone(true));
})
 
})
$('div:nth-child(3)').one("click",function(){

 a= $(".mystyle").append($(".square3").clone(true));
 a.one("click",function(){
  $(".mystyle").append($(".square3:first").clone(true));
})
 
})

  