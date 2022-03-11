import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-delete',
  templateUrl: './speaker-delete.component.html',
  styleUrls: ['./speaker-delete.component.css']
})
export class SpeakerDeleteComponent implements OnInit,OnChanges {
 speId:number=0;

  speaker:Speaker|null=null
  constructor(public speSer:SpeakerService) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['speId'].isFirstChange())
      this.speSer.DeleteSpeaker(this.speId).subscribe(
      a=>this.speaker=a
      
      )
  }
  // constructor() { }

  ngOnInit(): void {
  }

}
