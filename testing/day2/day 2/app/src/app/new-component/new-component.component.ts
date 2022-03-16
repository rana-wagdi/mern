import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
myprop=10
  constructor() { }

  ngOnInit(): void {
  }
//  async goTotalNumperOfPosts(){
//  let totalJsonObjects = await fetch("https://jsonplaceholder.typicode.com/posts")
//  let jsObject = await totalJsonObjects.json();
//  return jsObject.length;
//   }
  myfun(x:number,y:number){

    
    return x*y;//branch : code path
    
  

  }

}
