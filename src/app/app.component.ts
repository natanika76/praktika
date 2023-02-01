import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Article';
  time = Date.now();

  imgs = [
    "/assets/images/alp.jpeg",
    "/assets/images/alp2.jpg",
    "/assets/images/alp3.jpeg"
  ]
}
