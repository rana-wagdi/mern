import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students:Student[]=[]
  
load(){
  // this.stdSer.getAllStudent
}
constructor() { }
  ngOnInit(): void {
  }

}
