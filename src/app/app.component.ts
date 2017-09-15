import { Component, OnInit } from '@angular/core';

import { environment } from '../environments/environment';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ TodoDataService ]
})
export class AppComponent implements OnInit {
  title: string = 'app';
  todos: Todo[] = [];
  
  constructor( private todoDataService: TodoDataService ) {
  }
  
  ngOnInit() {
    console.log(`Environment: ${ environment.envName }`);
    
    this.todoDataService
      .getAllTodos()
      .subscribe(( todos ) => {
        this.todos = todos;
      });
  }
  
  onAddTodo( todo ) {
    this.todoDataService
      .addTodo(todo)
      .subscribe(( newTodo ) => {
        this.todos = this.todos.concat(newTodo);
      });
  }
  
  onRemoveTodo( todo ) {
    this.todoDataService
      .deleteTodoById(todo.id)
      .subscribe(() => {
        this.todos = this.todos.filter(( t ) => {
          return t.id !== todo.id;
        });
      });
  }
  
  onToggleTodoComplete( todo ) {
    this.todoDataService
      .toggleTodoComplete(todo)
      .subscribe(( updatedTodo ) => {
        todo = updatedTodo;
      });
  }
}
