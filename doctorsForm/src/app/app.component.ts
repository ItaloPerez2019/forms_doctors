import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
// import IUser from '../app/user.model;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  applicationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }

  initializeForm(): void {
    this.applicationForm = this.fb.group({
      nameControl: '',
      hobbyControl: '',
      canContacted: 'false',
      contactInfo: this.fb.group({
        email: '',
        phoneNumber: '',
      }),
    });
  }
}
