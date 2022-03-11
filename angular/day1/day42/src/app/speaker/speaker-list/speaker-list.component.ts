import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css'],
  // providers:[SpeakerService]//bya5d token and class
})
export class SpeakerListComponent implements OnInit {
// sepSer:SpeakerService = new SpeakerService()


spe:Speaker[]=[]

id =0;
constructor(public sepSer:SpeakerService){

}
spekDetails:Speaker=this.sepSer.getAllSpeakers()[0];
showDetailes(n:Speaker){
  this.spekDetails=n
}


  ngOnInit(): void {
    this.spe=this.sepSer.getAllSpeakers(); //kda b2a fehea kol elspeaker
    
  }

}
