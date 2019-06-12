import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messages: string[]
  message: string;

  constructor() {
    this.messages = [];
    this.message = "";
  }

  submitForm() {
    if (!!this.message)
      this.messages.push(this.message);
    this.message = "";
  }
}

