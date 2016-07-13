import { Component } from '@angular/core';
import { TodoComponent } from './todo';
import { BirthdayComponent } from './birthday';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [TodoComponent, BirthdayComponent]
})
export class AppComponent {
  isBirthday: boolean;

  constructor() {
    let birthday = new Date('2016-07-13');
    let today = new Date();

    this.isBirthday = birthday.toDateString() === today.toDateString();
  }
}
