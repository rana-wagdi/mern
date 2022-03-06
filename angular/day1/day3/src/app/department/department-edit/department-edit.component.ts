import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Department } from 'src/app/_modules/department';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {
  hidden = true;
  depEditt: any;
  imageSource(){
    this.hidden = !this.hidden;
  }
  
  
// @Output() depEditt:EventEmitter<Department>=new EventEmitter<Department>();

@Input() deptt:Department = new Department(0,"",'','',"",0,0);


@Output() deptEditt:EventEmitter<Department>=new EventEmitter<Department>();

  

    onClick(){
    
      this.deptEditt.emit(this.deptt)
    
    }
  

  constructor() { }

  ngOnInit(): void {
  }

}
