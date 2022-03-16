import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { AppRoutingModule } from './app-routing.module';
// import { RouterComponent } from './router/router.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConvertStringPipe } from './convert-string.pipe';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    // RouterComponent,
    HomeComponent,
    ConvertStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
