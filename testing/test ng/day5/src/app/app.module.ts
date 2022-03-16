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
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { SpeakerListComponent } from './speaker/speaker-list/speaker-list.component';
import { SpeakerAddComponent } from './speaker/speaker-add/speaker-add.component';
import { SpeakerDeatailsComponent } from './speaker/speaker-deatails/speaker-deatails.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { EventAddComponent } from './event/event-add/event-add.component';
import { SpeakerEditComponent } from './speaker/speaker-edit/speaker-edit.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'contact', component: ContactusComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'about', component: AboutComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'event', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'events', component: EventListComponent },
  // { path: 'events/detailes/:id', component: EventDetailsComponent },
  // { path: 'events/add', component: EventAddComponent },

  // {
  //   path: 'speaker',
  //   loadChildren: () =>
  //     import('./speaker/speaker.module').then((m) => m.SpeakerModule),
  // },

  // { path: '**', component: ErrorComponent },
];

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

    EventModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LogginInterceptor, multi: true },
    { provide: 'baseUrl', useValue: 'http://localhost:3000/' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
