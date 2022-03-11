import { Component, ElementRef, ViewChild } from '@angular/core';
import { SpeakerComponent } from './speaker/speaker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day4';
  value: Date | undefined;


  val: number = 3;
  @ViewChild("t1") name:ElementRef|null =null
  @ViewChild(SpeakerComponent) s1:SpeakerComponent|null=null;
  myfun(){
  
  // console.log(this.name?.nativeElement.value)
  console.log(this.s1?.age)
  }
  
  data: any;
    
  constructor() {
      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'First Dataset',
                  data: [65, 59, 80, 81, 56, 55, 40]
              },
              {
                  label: 'Second Dataset',
                  data: [28, 48, 40, 19, 86, 27, 90]
              }
          ]
      }
  }
}


