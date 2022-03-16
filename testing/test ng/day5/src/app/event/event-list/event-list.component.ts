import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/event.service';
import { Eventt } from 'src/app/_models/eventt';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events:Eventt[]=[];
  eveDetailesId=0
  
  eveEditId=0
  
  // load(){
  //   this.eveSer.getAllEvents().subscribe(a=>{
  //   this.events=a
  //   })
  // }
  sub:Subscription|null=null;
  constructor(public eveSer:EventService) { }

  ngOnInit(): void {
  this.sub=  this.eveSer.getAllEvents().subscribe(a=>{
      this.events=a
  })

}
}