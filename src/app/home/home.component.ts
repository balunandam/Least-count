import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
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
  constructor(private fb: FormBuilder) {}

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
