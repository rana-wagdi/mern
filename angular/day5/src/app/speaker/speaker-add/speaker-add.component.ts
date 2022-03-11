import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.css']
})
export class SpeakerAddComponent implements OnInit {
  
  newSpe:Speaker= new Speaker(0,"fullName","role",{haram:"city"},"email","password","image")
  
  save(){
  this.speSer.addSpeaker(this.newSpe).subscribe(
  a=>console.log(a)
  
  )
  }

  constructor(public speSer:SpeakerService ) { }

  ngOnInit(): void {
  }

}
