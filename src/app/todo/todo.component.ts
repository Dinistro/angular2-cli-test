import {Component} from '@angular/core';
import {Todo} from './todo';
import {TodoService} from './todo.service';

@Component({
  moduleId: module.id,
  selector: 'todo',
  templateUrl: 'todo.component.html',
  providers: [TodoService]
})
export class TodoComponent {

  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) {
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

}
