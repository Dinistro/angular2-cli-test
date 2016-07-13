/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';

describe('Component: Todo', () => {
  beforeEachProviders(() => [TodoService]);

  it('should create an instance', inject([TodoService],(todoService: TodoService) => {
    let component = new TodoComponent(todoService);
    expect(component).toBeTruthy();
  }));
});
