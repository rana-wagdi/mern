import { Component } from '@angular/core';
import { SpeakerService } from './speaker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[SpeakerService]
})
export class AppComponent {
  title = 'day42';
}
