import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
  ],
})
export class homeComponent {
  displayStyle = 'none';
  playerForm = [
    {
      name: '',
    },
  ];
  constructor() {}

  addPlyrs() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  addForm() {
    this.playerForm.push({
      name: '',
    });
    debugger;
  }
}
