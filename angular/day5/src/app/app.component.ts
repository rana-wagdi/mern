import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpeakerService } from './speaker.service';
import { TryobservableService } from './tryobservable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day5';
   
  constructor(public o:TryobservableService, public speSer:SpeakerService){}
  sub:Subscription|null=null
    
    myFun2(){
    }
    start(){
    }
   
    stop(){
    this.sub?.unsubscribe();
    }
    show(){
    
      // this.speSer.getSpeakerById(100).subscribe(a=>{
      
      //     console.log(a)
      // },(er:HttpErrorResponse)=>{
      // console.log(er.error)
      // })
      
  
    this.speSer.getAllSpeaker().subscribe({
    next:a=>{
      console.log(a)
    }
    
    })
    }
  
  
  
  }



// function myFun2() {
//   throw new Error('Function not implemented.');
// }

