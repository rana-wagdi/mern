import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SpeakersComponent } from './speakers/speakers.component';
// import { DepartmentLisComponent } from './department/department-lis/department-lis.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentDetailesComponent } from './department/department-detailes/department-detailes.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { ConvertStringPipe } from './convert-string.pipe';
import { PowerTo2Pipe } from './power-to2.pipe';
import { FilterPipe } from './filter.pipe';
import { HighLightDirective } from './high-light.directive';
import { DepartmentEditComponent } from './department/department-edit/department-edit.component';
// import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SpeakersComponent,
    // DepartmentLisComponent,
    DepartmentAddComponent,
    DepartmentDetailesComponent,
    DepartmentListComponent,
    ConvertStringPipe,
    PowerTo2Pipe,
    FilterPipe,
    HighLightDirective,
    DepartmentEditComponent
  
  ],
  imports: [
    BrowserModule,
   CoreModule,
   SharedModule,
  //  FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent, CoreModule, SharedModule]
})
export class AppModule { }
