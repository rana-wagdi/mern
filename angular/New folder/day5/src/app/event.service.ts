import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
// import { appendFile } from 'fs';
// import { inject } from '@angular/core/testing';

import { Eventt } from './_models/eventt';

@Injectable({
  providedIn: 'root'
})
export class EventService {
// baseurl:string="http://localhost:3000/event/"
  
  getAllEvents(){
    return this.http.get<Eventt[]>(this.baseURL)
  }
  addEvent(eve:Eventt,file:File){
    let frm:FormData = new FormData();
    frm.append("_id",eve._id.toString())
    frm.append("name",eve._id.toString())
    frm.append("title",eve._id.toString())
    frm.append("image",file,file.name)
  return  this.http.post<Eventt>(this.baseURL,frm)
  }
  getEventById(id:number){
    return this.http.get<Eventt>(this.baseURL+id)
  }
  
  myfun(){
  let h:HttpHeaders=new HttpHeaders();
 h= h.append("Content-Type","multipart/form-data")
  // h.append("")
  h=h.append("Authorization","hhh")
  let p:HttpParams= new  HttpParams();
  
 p= p.append("name","aly");
 p= p.append("age",30);
  return  this.http.get(this.baseURL,{params:p,headers:h})
  }
  
  
  constructor(public http:HttpClient,@Inject('baseUrl') public baseURL:string) {
     this.baseURL +="event/"
  }
}
