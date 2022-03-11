import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.css'],
  // providers:[SpeakerService] 
})
export class SpeakerAddComponent implements OnInit {


  nspe:Speaker = new Speaker(0,"","","","",0,false,"",false)
  

  

  constructor(public speSer:SpeakerService) { }
  save(){
   this.speSer.addSpeaker(this.nspe)
    }
    
  ngOnInit(): void {
  }

}
