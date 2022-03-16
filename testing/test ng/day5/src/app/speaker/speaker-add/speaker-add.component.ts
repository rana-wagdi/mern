import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/app/notification.service';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.css'],
})
export class SpeakerAddComponent implements OnInit, OnDestroy {
  newSpe: Speaker = new Speaker(
    0,
    'fullName',
    'role',
    { haram: 'city' },
    'email',
    'password',
    'image'
  );
  sub: Subscription | null = null;
  save() {
    this.speSer.addSpeaker(this.newSpe).subscribe((a) => {
      console.log(a);
      this.notify.isAdded = true;
      this.router.navigate(['/speaker']);
    });
  }
  show(a: any) {
    console.log(a)
  }
  constructor(
    public speSer: SpeakerService,
    public router: Router,
    public notify: NotificationService
  ) {}
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {}
}
