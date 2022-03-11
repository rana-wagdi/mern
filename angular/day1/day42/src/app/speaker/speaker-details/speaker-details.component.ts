import { Component, Input, OnInit } from '@angular/core';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit {

  @Input() spek:Speaker=new Speaker (0,"","","","",0,false,"",false)
  
  constructor() { }

  ngOnInit(): void {
  }

}
