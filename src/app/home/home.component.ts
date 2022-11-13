import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class homeComponent {
  playersForm: FormGroup;
  displayStyle = 'none';
  constructor(private fb: FormBuilder) {
    this.playersForm = this.fb.group({
      name: '',
      skills: this.fb.array([]),
    });
  }

  addPlyrs() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
}
