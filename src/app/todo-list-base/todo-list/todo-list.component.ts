import { Component, OnInit } from '@angular/core';
import { ITodoList } from 'src/app/models/constants';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['../../home/home.component.css', './todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoItem: string = '';
  todoList: ITodoList[];

  constructor() {
    this.todoItem = '';
    this.todoList = [];
  }

  ngOnInit(): void {
    console.log('todo-list component rendered');
  }

  /* ADD */
  handleAdd() {
    let item: ITodoList = { title: this.todoItem, isComplete: false };
    if (this.todoItem !== '') {
      this.todoList.push(item);
      this.todoItem = '';
    }
  }

  /* DELETE */
  handleDelete(idx: number) {
    /* this.todoList.splice(idx, 1);
    console.log(this.todoList); */

    let newList = this.todoList.filter((item: any, index) => index !== idx);
    this.todoList = newList;
  }

  /* EDIT */
  handleComplete(idx: number) {
    /* this.todoList[idx] = {
      ...this.todoList[idx],
      isComplete: !this.todoList[idx].isComplete
    }; */

    let newList = this.todoList.map((item, index) =>
      index === idx ? { ...item, isComplete: !item.isComplete } : item
    );
    this.todoList = newList;
  }
}
