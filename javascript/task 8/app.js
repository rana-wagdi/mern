// function Shape(color){
//     if(this.constructor ===Shape)
//     throw new Error('')

// }
//global var for all classes to increase per create shape
// let count = 0
// function Shape(color)
// {
//     this.color=color;

//     count++
//     if(this.constructor===Shape)//check if we make object from class
//     {
//         throw new Error("can't create object from this class");//throw error in console with msg
//     }
    
//     draw = function()
//     {
//         return "can't draw my self";
//     }
// }


// class Rectangle extends Shape{
//     constructor(color,top,left,dim1,dim2)
//     {
//         super(color);
//         this.top=top;
//         this.left=left;
//         this.dim1=dim1;
//         this.dim2=dim2;
        
//     }
//     //override draw function
//      draw()
//     {
//         let rectangle=document.createElement('div');
    
//         rectangle.style.top=`${this.top}px`;
//         rectangle.style.left=`${this.left}px`;
//         rectangle.style.width=`${this.dim1}px`;
//         rectangle.style.height=`${this.dim2}px`;
//         rectangle.style.backgroundColor=`${this.color}`;
//         document.body.append(rectangle);
//     }
// }

// class Circle extends Shape{
//     constructor(color,top,left,radius)
//     {
//         super(color);
//         this.top=top;
//         this.left=left;
//         this.radius=radius;
//     }
//     draw()
//     {
//         let Circle=document.createElement('div');
//         Circle.style.top=`${this.top}px`;
//         Circle.style.left=`${this.left}px`;
//         Circle.style.width=`${this.radius*2}px`;
//         Circle.style.height=`${this.radius*2}px`;
//         Circle.style.backgroundColor=`${this.color}`;
//         Circle.style.borderRadius='50%';
//         document.body.append(Circle);
//     }
// }



// let rectobject=new Rectangle("red",20,10,70,10);
// rectobject.draw();//this will draw rectangle;

// let CircObject=new Circle('green',50,100,80);
// CircObject.draw();
// let rec=new Rectangle("pink",20,10,70,10);
// rec.draw();//this will draw rectangle;

// let Cir=new Circle('blue',50,100,80);
// Cir.draw();
// console.log(`number of shapes is :   ${count}`)



// class Engine{
//     constructor() {
//         if (new.target === Engine) {
//             throw new Error("can't create object from this class");
//           }
          
//     }
//     static count;

// }
class Engine {
    static #count;
  
    constructor(source) {
      if (new.target.name == "Engine")
        throw new Error("can't create instance from abstract class");
  
      this.source = source;
    
    }
  }
  

// class Car extends Engine{
   
//     constructor(source,top=0,left=0){
//         super(source)
//         this.top= top;
//         this.left=left;
//         }
//     top(){
//         return this.top
//     }
//     left(){
//         return this.left
//     }
//     moveLeft(){
//         this.source=document.images[0];
//         let timerID=setInterval(()=>{
//             this.left+=10;
//             if(left<window.innerWidth-this.source.width)
//            this.source.style.left=this.left+"px";
        
//         },50)
//     }
//     moveRight(){
//         let timerID= setInterval(()=>{
//             left-=10;
//             if(left>0)
//             this.source.style.left=this.left+"px";
           
   
//            },50)
//     }
//     ChangeStyle(){

//     }
    
// }
// let car=new Car(10,70,10);
class Car extends Engine {
    top;
    left;
    isMoving;
    
  
    constructor(source, top = 0, left = 0) {
      super(source);
      this.top = top;
      this.left = left;
      this.isMoving = false;
     
    }
  
    moveleft(value) {
      if (this.left  < window.innerWidth - this.source.width) {
        this.left += value;
        this.source.style.left = `${this.left}px`;
        return true;
      } else {
        this.left = 0;
        this.source.style.left = `${this.left}px`;
        return false;
      }
    }
  
    moveRight(value) {
      if (this.left < 0) {
        this.left += value;
        this.source.style.left = `${this.left}px`;
        return true;
      } else {
        this.left = window.innerWidth - this.source.width;
        this.source.style.left = `${this.left}px`;
        return false;
      }
    }
  
    changeStyle(styleObj) {
      // TODO:
      
    }
  
    moveCar(direction = "left") {
      const timerId = setInterval(() => {
        this.isMoving =
          direction === "left"
            ? this.moveleft(1)
            : direction === "right"
            ? this.moveRight(-1)
            : "";
  
      }, 1);
    }
  }
let r = document.images[0]
console.log(r)

  let ct=new Car(r,50,100);


ct.moveRight()
ct.moveleft()
ct.changeStyle()
ct.moveCar("left");
