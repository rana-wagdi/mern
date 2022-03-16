import { Component, OnInit } from '@angular/core';
import { Speaker } from '../_models/speaker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // spes:Speaker|null=null
  spes: Speaker = new Speaker(
    0,
    'fullName',
    'role',
    { haram: 'city' },
    'email',
    'password',
    'image'
  );
  emailIsUsed=false;
  show(a: any) {
    console.log(a)
  }
  save(){
  console.log(this.spes)
  }
  myfun(val:string){
  if(val=="aly@ss.ss"){
  this.emailIsUsed=true}
  else{
    this.emailIsUsed=true
  }
  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
