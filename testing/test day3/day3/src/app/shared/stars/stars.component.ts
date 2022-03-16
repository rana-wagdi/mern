import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Student } from 'src/app/_modules/student';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {


 @Input() rating = 3; //allow compontnet star to send data
  cropWidth=75;
  //1 declare evevt
  @Output() ratingClicked:EventEmitter<Student>=new EventEmitter<Student>();
 

  constructor() { }
  
  
  ngOnChanges(changes: SimpleChanges): void {
 
    this.cropWidth=this.rating*75/5; 
  }

onClick(){
//2- fire event
// this.ratingClicked.emit(this.std)
console.log("clicked")
}

  // ngOnChanges(){
  //   this.cropWidth=this.rating*75/5;
  
  
  // }
  ngOnInit(): void {
  
   
  }

}
