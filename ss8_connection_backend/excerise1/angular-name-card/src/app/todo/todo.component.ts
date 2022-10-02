import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
    this.getAll();
  }

  ngOnInit(): void {

  }

  getAll() {
    this.todoService.getAll().subscribe(next => {
      this.todos = next;
    })
  }

  toggleTodo(id: number) {
    let todo: Todo = {}
    this.todoService.findById(id).subscribe(next => {
      todo = next;
      todo.complete = true;
      this.todoService.update(id, todo).subscribe(next => {
        this.getAll()
      })
    })
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.add(todo).subscribe(next => {
        this.getAll();
      });
      this.content.reset();
    }
  }
  delete(id){
    this.todoService.delete(id).subscribe(n=>{
      this.getAll()
    })
  }
}
