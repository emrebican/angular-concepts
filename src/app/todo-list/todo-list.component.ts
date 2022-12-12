import { Component } from '@angular/core';

interface ITodoList {
  title: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css', '../home/home.component.css']
})
export class TodoListComponent {
  todoItem: string = '';
  todoList: ITodoList[] = [];

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
