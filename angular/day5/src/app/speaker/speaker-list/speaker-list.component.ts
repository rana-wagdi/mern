import { Component, OnInit, SimpleChanges } from '@angular/core';
// import { loadavg } from 'os';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent implements OnInit {

  constructor(public speSer:SpeakerService) { }
  searchTerm:string=""
  speDetailesId=0
  
  speEditId=0
  speDelteId=0
  
  
  spes:Speaker[]=[]
  load(){
    this.speSer.getAllSpeaker().subscribe(a=>this.spes=a)
    }
    // delete() {
    //   this.speSer.DeleteSpeaker().subscribe((a) => console.log(a));
    // }
    speId:number=0;
    speaker:Speaker|null=null

  // speaker:Speaker|null=null
  // constructor(public speSer:SpeakerService) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['speId'].isFirstChange())
      this.speSer.DeleteSpeaker(this.speId).subscribe(
      a=>this.speaker=a
      
      )
  }
  ngOnInit(): void {
 
  }

}
