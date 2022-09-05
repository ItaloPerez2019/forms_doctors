import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  applicationForm: FormGroup;

  constructor() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.applicationForm = new FormGroup({
      nameControl: new FormControl('John Doe'),
      hobbyControl: new FormControl('Whistling'),
      contactInfo: new FormGroup({
        email: new FormControl('fake@fake.com'),
        phoneNumber: new FormControl('555-5555'),
      }),
    });
  }
}
