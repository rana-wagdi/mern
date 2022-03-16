import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { SpeakerService } from 'src/app/speaker.service';
import { Eventt } from 'src/app/_models/eventt';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
eve:Eventt=new Eventt(0,"name",new Date(),"title","",0)

spes:Speaker[]=[]
file:any;


onFileChange(s:any){
  this.file=s.target.files[0];
}
save(){
  this.eveSer.addEvent(this.eve,this.file).subscribe(a=>console.log(a))
  this.router.navigate(['/events'])
}

show(){
  this.eveSer.myfun().subscribe(a=>{})
}

  constructor(public speSer:SpeakerService,public router:Router ,public eveSer:EventService) { }

  ngOnInit(): void {
  this.speSer.getAllSpeaker().subscribe(a=>{
    this.spes=a
    // console.log(this.spes)
  })
  }

}
