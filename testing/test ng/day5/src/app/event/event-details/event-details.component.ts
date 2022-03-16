import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Eventt } from 'src/app/_models/eventt';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  speId:number=0;

  event:Eventt|null=null
  constructor(public eveSer:EventService, public ac:ActivatedRoute) { }
  

    
    ngOnInit(): void {
     this.ac.params.subscribe(a=>{
      this.eveSer.getEventById( a['id']).subscribe(
          a=>this.event=a
      )
    })

      }

}
