import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  addItemText: string = 'Add new item';
  todoItem: string = '';
  todos = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.todo.subscribe(res => this.todos = res);
    this.itemCount = this.todos.length;
  }

  addItem() {
    this.todoItem !== '' ? this.todos.push(this.todoItem) : this.todos.push('Mock todo');
    this.todoItem = '';
    this._data.changeTodo(this.todos);
    this.itemCount = this.todos.length;
  }

  removeItem(i) {
    this.todos.splice(i, 1);
    this._data.changeTodo(this.todos);
  }

}
