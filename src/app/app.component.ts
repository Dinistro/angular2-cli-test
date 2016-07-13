import { Component } from '@angular/core';
import { TodoComponent } from './todo';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [TodoComponent]
})
export class AppComponent {
  title = 'app works!';
}
