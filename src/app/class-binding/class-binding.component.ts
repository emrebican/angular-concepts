import { Component } from '@angular/core';

interface IAnimal {
  name: string;
  environment: string;
  isMammal: boolean;
}

interface ISerie {
  title: string;
  year: number;
  like: boolean;
}

interface ITodoList {
  title: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['../app.component.css', './class-binding.component.css']
})
export class ClassBindingComponent {
  animals: IAnimal[] = [
    {
      name: 'owl',
      environment: 'air',
      isMammal: false
    },
    {
      name: 'tiger',
      environment: 'land',
      isMammal: true
    },
    {
      name: 'elephant',
      environment: 'land',
      isMammal: true
    },
    {
      name: 'whale',
      environment: 'sea',
      isMammal: true
    }
  ];

  todos: string[] = [
    'eat your breakfast',
    'go for walking',
    'learn Angular',
    'sleep early'
  ];

  series: ISerie[] = [
    {
      title: 'Game of Thrones',
      year: 2011,
      like: true
    },
    {
      title: 'Power of the Rings',
      year: 2022,
      like: false
    },
    {
      title: 'House of Dragon',
      year: 2022,
      like: true
    },
    {
      title: 'The Expanse',
      year: 2015,
      like: true
    }
  ];

  todoList: ITodoList[] = [];

  /* ADD */
  handleAdd(value: string) {
    let item: ITodoList = { title: value, isComplete: false };
    this.todoList.push(item);
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
