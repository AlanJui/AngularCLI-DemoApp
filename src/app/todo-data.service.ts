import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

  lastId: number = 0;
  todos: Todo[] = [];

  constructor( private api: ApiService ) {
  }

  getTodoById( id: number ): Observable<Todo> {
    return this.api.getTodoById(id);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  addTodo( todo: Todo ): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  updateTodo( todo: Todo ): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  deleteTodoById( id: number ): Observable<null> {
    return this.api.deleteTodoById(id);
  }

  toggleTodoComplete( todo: Todo ): Observable<Todo> {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }
}
