import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { SpeakerAddComponent } from './speaker-add/speaker-add.component';
import { SpeakerDeatailsComponent } from './speaker-deatails/speaker-deatails.component';
import { SpeakerEditComponent } from './speaker-edit/speaker-edit.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { SpeakerDeleteComponent } from './speaker-delete/speaker-delete.component';
// import { RouterModule } from '@angular/router';
// import { FilterPipe } from './filter.pipe';
// import { FilterPipe } from '../filter.pipe';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

{ path: '', component: SpeakerListComponent },
{ path: '/add', component: SpeakerAddComponent },
{ path: '/edit/:id', component: SpeakerEditComponent },
{ path: '/detailes/:id', component: SpeakerDeatailsComponent },


];
@NgModule({
  declarations: [
    SpeakerListComponent,
    SpeakerAddComponent,
    SpeakerDeatailsComponent,
    SpeakerEditComponent,
    FilterPipe,
    SpeakerDeleteComponent,
    // FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
    
  ],
  exports:[
    SpeakerListComponent,
    SpeakerAddComponent,
    SpeakerDeatailsComponent,
    SpeakerEditComponent,
    
  ]

  
})
export class SpeakerModule { }
