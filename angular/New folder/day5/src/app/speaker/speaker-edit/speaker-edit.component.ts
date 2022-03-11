import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-edit',
  templateUrl: './speaker-edit.component.html',
  styleUrls: ['./speaker-edit.component.css'],
})
export class SpeakerEditComponent implements OnInit, OnChanges {
   speId = 0;

  speaker: Speaker = new Speaker(
    0,
    'fullName',
    'role',
    { haram: 'city' },
    'email',
    'password',
    'https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cute-boy-couple-avatar-image_1235465.jpg'
  );
  constructor(public speSer: SpeakerService,public router:Router, public ac:ActivatedRoute) {}

  ngOnChanges(changes: SimpleChanges): void {
 
  }
  save(){
    this.speSer.updateSpeaker(this.speaker).subscribe((a) => console.log(a));
    this.router.navigate(['/speaker'])
  }

  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.speSer.getSpeakerById(a['id']).subscribe(d=>this.speaker=d);
  })
}
}
