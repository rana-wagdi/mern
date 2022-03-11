import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ModulesModule } from './-modules/-modules.module';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SpeakersComponent } from './speakers/speakers.component';
import { FormsModule } from '@angular/forms';

// import { SpeakersComponent } from './speakers/speakers.component';


@NgModule({
  declarations: [
    AppComponent,
    SpeakersComponent,
    // SpeakersComponent,
  
  ],
  imports: [
    BrowserModule,
    CoreModule,
    // ModulesModule,
    FormsModule
    
 
  ],
  providers: [],
  bootstrap: [AppComponent, CoreModule]
})
export class AppModule { }
