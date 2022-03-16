import { Component, EventEmitter,OnInit, Output } from '@angular/core';
import { Department } from 'src/app/_modules/department';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {

//1- declare property of eventemitter datatype

@Output() deptAdded:EventEmitter<Department>=new EventEmitter<Department>();

dept:Department = new Department(0,"",'','',"",0,0);

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
  
  //2 fire event
  
  this.deptAdded.emit(new Department(this.dept._id,this.dept.image, this.dept.name, this.dept.location,this.dept.date,this.dept.price,this.dept.rating))
    //save new department
  }

}
