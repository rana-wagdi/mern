import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// import { timeStamp } from 'console';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-edit',
  templateUrl: './speaker-edit.component.html',
  styleUrls: ['./speaker-edit.component.css']
})
export class SpeakerEditComponent implements OnInit, OnChanges {
@Input() sepId=0
sepp:Speaker|null = new Speaker(0,"","","","",0,false,"",false);
seppTemp= new Speaker(0,"","","","",0,false,"",false);
  constructor(public sepSer:SpeakerService) { }
  
  ngOnChanges(changes: SimpleChanges): void {
  this.sepp=this.sepSer.getSpeakersById(this.sepId)
  if(this.sepp != null){
  this.seppTemp = this.sepp;
   }
  
  }
  save(){
    this.sepSer.EditSpeaker(this.sepId)
    this.sepSer.addSpeaker(this.seppTemp)
     }
  
  
  

  ngOnInit(): void {
  }

}
