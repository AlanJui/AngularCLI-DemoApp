import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Todo } from './todo';

@Injectable()
export class ApiMockService {
  
  constructor() {
  }
  
  getAllTodos(): Observable<Todo[]> {
    return Observable.of([
      new Todo({
        id: 1,
        title: 'Read article',
        complete: false
      })
    ]);
  }
  
  createTodo(todo: Todo): Observable<Todo> {
    return Observable.of(
      new Todo({
        id: 1,
        title: 'Read article',
        complete: false
      })
    );
  }
  
  getTodoById(id: number): Observable<Todo> {
    return Observable.of(
      new Todo({
        id: 1,
        title: 'Read article',
        complete: false
      })
    );
  }
  
  updateTodo(todo: Todo): Observable<Todo> {
    return Observable.of(
      new Todo({
        id: 1,
        title: 'Read article',
        complete: false
      })
    );
  }
  
  deleteTodoById(id: number): Observable<null> {
    return null;
  }
}
