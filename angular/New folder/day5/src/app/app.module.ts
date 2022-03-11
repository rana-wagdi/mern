import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeakerModule } from './speaker/speaker.module';
import { EventModule } from './event/event.module';
import { FormsModule } from '@angular/forms';
import { LogginInterceptor } from './interceptors/loggin.interceptor';
import { LoginComponent } from './login/login.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';

import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContactusComponent,
    AboutComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SpeakerModule,
    EventModule,
    FormsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LogginInterceptor, multi: true },
    { provide: 'baseUrl', useValue: 'http://localhost:3000/' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
