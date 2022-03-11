 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PasswordModule} from 'primeng/password';
import {RatingModule} from 'primeng/rating';
import { ChartComponent } from './chart/chart.component';
import {ChartModule} from 'primeng/chart';
import {CalendarModule} from 'primeng/calendar';
@NgModule({
  declarations: [
    AppComponent,
    SpeakerComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    PasswordModule,
    RatingModule,
    ChartModule,
    CalendarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
