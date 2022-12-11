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

interface IList {
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

  lists: IList[] = [];

  handleList(value: string) {
    let item: IList = { title: value, isComplete: false };
    this.lists.push(item);
  }

  handleComplete(idx: number) {
    let newList = this.lists.map((item: any, index: number) => {
      if (index === idx) {
        console.log('log', index);
        return { ...item, isComplete: true };
      }
    });
    this.lists = newList;
    console.log(this.lists);
  }

  /* handleDelete(idx: number) {
    this.lists.filter((item, index) => index !== idx);
    console.log(this.lists);
  } */
}
