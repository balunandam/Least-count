import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class headerComponent {
  constructor() {}
  getDate = () => {
    return Date.now();
  };
  ngAfterContentInit() {
    setInterval(function () {
      this.getDate();
    }, 1000);
  }
}
