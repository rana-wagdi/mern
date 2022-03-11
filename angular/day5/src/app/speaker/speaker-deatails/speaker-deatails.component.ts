import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-deatails',
  templateUrl: './speaker-deatails.component.html',
  styleUrls: ['./speaker-deatails.component.css']
})
export class 
SpeakerDeatailsComponent implements OnInit, OnChanges {

@Input() speId:number=0;

speaker:Speaker|null=null
constructor(public speSer:SpeakerService) { }

ngOnChanges(changes: SimpleChanges): void {
  if(!changes['speId'].isFirstChange())
    this.speSer.getSpeakerById(this.speId).subscribe(
    a=>this.speaker=a
    
    )
}
  
  ngOnInit(): void {
  }

}
