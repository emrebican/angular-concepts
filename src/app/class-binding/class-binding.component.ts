import { Component } from '@angular/core';
import { IAnimal, ISerie } from '../models/constants';
@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['../home/home.component.css', './class-binding.component.css']
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
}
