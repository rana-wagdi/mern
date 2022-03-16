import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventDeleteComponent } from './event-delete/event-delete.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EventListComponent,
    EventAddComponent,
    EventDetailsComponent,
    EventEditComponent,
    EventDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    EventListComponent,
    EventAddComponent,
    EventDetailsComponent,
    EventEditComponent,
    EventDeleteComponent
  ]
})
export class EventModule { }
