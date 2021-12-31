// alert("rana");

// let smallWinodw=open("","small window","left=100,top=100,width=320,height=320");
//  w.moveBy(30,30)
//  let smallWindow=open("smallwindow.html","","width=300,height=300,left=40,top=40");
// small.parent.name
// small.moveBy()
// small.scrollBy()
//close and closed  window.closed window.close()
// setInterval--> scrolling

// not used theses days (exixting libraries using divs)


//location object
//navigator object

//this keyword 





//------------------ Timers   ASYNC tASKS  (Anonymouse Functions)


// setInterval(callBackfunction,time);   time ms  1000-> 1 second
// setTimeout(callBackfunction,time); //only one time
// function testing(){}
// setInterval(testing,1000);
// let timerId=setInterval(function(){
//   console.log("HI");
// },1000);


// clearInterval(timerId);

// let timerId=setTimeout(()=>{
//   //start exam
//   console.log("out");
// },3000);

// clearTimeout(timerID);

//location--> child --> window --> toString()--> Object 
//Array  --> Object --> toString();
//String  --> Objcet --> toString();
//premitives --> 2.toString();  Number






// window.open(URL,name,specs,replace)


 window.open("","","width=200,height=200");
newPage.document.write(`<pre>
Lorem ipsum dolor, sit amet consect
etur adipisicing elit. Officia neque
         architecto quasi praesenti
         um quas impedit sunt incidunt, 
        officiis rerum dicta vero 
        velit minus comm
        di enim itaque blanditiis voluptates rem exer
        citationem! Lorem ipsum dolor sit amet consectetur
         adipisicing elit.
          Deserunt perspiciatis a
         speriores, aliqua
         m facilis quasi cumque inv
         entore assumenda dolores minus quam architecto 
         eligendi harum iusto suscipit rem voluptas 
         molestias ipsa beatae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eaque 
         ratione qui voluptate sequi exercitationem, d
         lorem provident rerum ut. Repellat commodi
          sapiente rem ipsa voluptatum deserunt totam 
         porro cumque consequuntur?
         Lorem ipsum dolor, sit amet consectet








`);
let height = newPage.screen.height;
newPage.scrollBy(0,height)


setTimeout(() => {
    newPage.close();
}, 3000);