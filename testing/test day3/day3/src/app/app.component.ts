import { Component } from '@angular/core';
import { Student } from './_modules/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3';
  num=2;
  hamada="hamada"
  std:Student=new Student(10,"Aly")
  show(){
    console.log(this.std.name)
  }
  myFun(n:Student){
  console.log(n.print())
  this.hamada="star clicked: "+n
  
  }
}
