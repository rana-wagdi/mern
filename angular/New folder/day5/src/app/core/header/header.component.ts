import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public notify:NotificationService) { }

  ngOnInit(): void {
  }

}
