import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'src/app/_modules/department';

@Component({
  selector: 'app-department-detailes',
  templateUrl: './department-detailes.component.html',
  styleUrls: ['./department-detailes.component.css']
})
export class DepartmentDetailesComponent implements OnInit {

@Input() dept:Department=new Department(0,"https://miro.medium.com/max/1200/1*lbRRHICAZjLkotvrMY7MLQ.png",'',"","",0,0)


  constructor() { }

  ngOnInit(): void {
  }

}
