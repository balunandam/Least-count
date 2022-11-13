import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class homeComponent {
  displayStyle = 'none';
  playerForm = [
    {
      name: '',
    },
  ];
  faCoffee;
  constructor() {
    this.faCoffee = faCoffee;
  }

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
