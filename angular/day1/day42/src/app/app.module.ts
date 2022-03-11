import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { SpeakerListComponent } from './speaker/speaker-list/speaker-list.component';
import { SpeakerAddComponent } from './speaker/speaker-add/speaker-add.component';
import { SpeakerDetailsComponent } from './speaker/speaker-details/speaker-details.component';
import { SpeakerEditComponent } from './speaker/speaker-edit/speaker-edit.component';
import { FormsModule } from '@angular/forms';
import { SpeakerService } from './speaker.service';

@NgModule({
  declarations: [
    AppComponent,
    SpeakerComponent,
    SpeakerListComponent,
    SpeakerAddComponent,
    SpeakerDetailsComponent,
    SpeakerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers:[SpeakerService],

  bootstrap: [AppComponent]
})
export class AppModule { }
