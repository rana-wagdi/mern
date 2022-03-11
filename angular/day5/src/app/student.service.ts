// import { HttpClient } from '@angular/common/http';
// import { Inject, Injectable } from '@angular/core';
// import { inject } from '@angular/core/testing';
// import { Student } from './_models/student';

// @Injectable({
//   providedIn: 'root'
// })
// export class StudentService {
//   baseurl:string="http://localhost:3000/student/"
// getAllStudent(){
//  return this.http.get<Student[]>(this.baseURL)

// }
// addStudent(std:Student,file:File){
//   let frm:FormData = new FormData();
//   frm.append("_id",std._id.toString() )
//   frm.append("fullName",std._id.toString() )
// }

//   constructor(public http:HttpClient, @Inject('baseUrl') public baseURL:string) { 
//     this.baseURL +="students/"
//   }
// }
