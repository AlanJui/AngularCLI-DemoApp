import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Todo } from './todo';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor( private http: Http ) {
  }

  // API: GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.http
      .get(`${API_URL}/todos`)
      .map(response => {
        let todos = response.json();
        return todos.map(( todo ) => new Todo(todo));
      })
      .catch(this.handleError);
  }

  getTodoById( ID: number ): Observable<Todo> {
    return this.http
      .get(`${API_URL}/totos/${ID}`)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  createTodo( todo: Todo ): Observable<Todo> {
    return this.http
      .post(`${API_URL}/todos`, todo)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  updateTodo( todo: Todo ): Observable<Todo> {
    return this.http
      .put(`${API_URL}/todos/${todo.id}`, todo)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  deleteTodoById( ID: number ): Observable<null> {
    return this.http
        .delete(`${API_URL}/todos/${ID}`)
        .map( response => null)
        .catch( this.handleError );
  }

  private handleError( error: Response | any ): Observable<Response> {
    console.error('APIService::handleError', error);
    return Observable.throw(error);
  }

}
