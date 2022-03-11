import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
import { EventAddComponent } from './event/event-add/event-add.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SpeakerAddComponent } from './speaker/speaker-add/speaker-add.component';
import { SpeakerDeatailsComponent } from './speaker/speaker-deatails/speaker-deatails.component';
import { SpeakerEditComponent } from './speaker/speaker-edit/speaker-edit.component';
import { SpeakerListComponent } from './speaker/speaker-list/speaker-list.component';



  const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactusComponent },
    { path: '',redirectTo:'/home', pathMatch:"full"},
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'event' ,redirectTo:'/login', pathMatch:"full" },
    { path: 'events' ,component:EventListComponent },
    { path: 'events/detailes/:id' ,component:EventDetailsComponent },
    { path: 'events/add' ,component:EventAddComponent },
    
    { path: 'speaker', component: SpeakerListComponent },
    { path: 'speaker/add', component: SpeakerAddComponent },
    { path: 'speaker/edit/:id', component: SpeakerEditComponent },
    { path: 'speaker/detailes/:id', component: SpeakerDeatailsComponent },
    
    
    {path:"**", component:ErrorComponent}
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
