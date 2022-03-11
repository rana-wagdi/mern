import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeakerModule } from './speaker/speaker.module';
import { StudentModule } from './student/student.module';
// import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    // FilterPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SpeakerModule,
    StudentModule
  ],
  providers: [{provide:"baseUrl", useValue:"http://localhost:3000/student/"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
