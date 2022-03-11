import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailsComponent } from './student-details/student-details.component';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    StudentAddComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StudentListComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    StudentAddComponent,
    StudentDetailsComponent
  ]
})
export class StudentModule { }
