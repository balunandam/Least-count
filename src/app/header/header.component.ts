import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class headerComponent {
  date;
  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 1);
  }
}
