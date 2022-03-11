import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
// import { loadavg } from 'os';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent implements OnInit,OnDestroy {

  constructor(public speSer:SpeakerService) { }
  ngOnDestroy(): void {
   console.log("speakers destroyod")
   this.sub?.unsubscribe()
  }
  searchTerm:string=""
  speDetailesId=0
  
  speEditId=0
  speDelteId=0
  
  sub:Subscription|null=null;
  spes:Speaker[]=[]
  
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
  this.sub=  this.speSer.getAllSpeaker().subscribe(a=>this.spes=a)
  }

}
