import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-edit',
  templateUrl: './speaker-edit.component.html',
  styleUrls: ['./speaker-edit.component.css'],
})
export class SpeakerEditComponent implements OnInit, OnChanges {
  @Input() speId = 0;

  speaker: Speaker = new Speaker(
    0,
    'fullName',
    'role',
    { haram: 'city' },
    'email',
    'password',
    'image'
  );
  constructor(public speSer: SpeakerService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['speId'].isFirstChange())
      this.speSer
        .getSpeakerById(this.speId)
        .subscribe((a) => (this.speaker = a));
  }
  save() {
    this.speSer.updateSpeaker(this.speaker).subscribe((a) => console.log(a));
  }

  ngOnInit(): void {}
}
