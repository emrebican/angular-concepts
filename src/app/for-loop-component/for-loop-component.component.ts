import { Component } from '@angular/core';

interface IPokemon {
  id: number;
  name: string;
  type: string;
  isCool: boolean;
}

interface IMovie {
  title: string;
  year: number;
  rating: number;
  isGood: boolean;
}

interface IPlayer {
  name: string;
  age: number;
  isActive: boolean;
}

@Component({
  selector: 'app-for-loop-component',
  templateUrl: './for-loop-component.component.html',
  styleUrls: [
    '../home/home.component.css',
    './for-loop-component.component.css'
  ]
})
export class ForLoopComponentComponent {
  pokemons: IPokemon[] = [
    {
      id: 1,
      name: 'pikachu',
      type: 'electric',
      isCool: true
    },
    {
      id: 2,
      name: 'squirtle',
      type: 'water',
      isCool: false
    },
    {
      id: 3,
      name: 'charmander',
      type: 'fire',
      isCool: true
    }
  ];

  movies: IMovie[] = [
    {
      title: 'Black Adam',
      year: 2022,
      rating: 5,
      isGood: false
    },
    {
      title: 'Thor: Ragnarok',
      year: 2017,
      rating: 7,
      isGood: true
    },
    {
      title: 'Top Gun: Maverick',
      year: 2022,
      rating: 8,
      isGood: true
    },
    {
      title: 'Hobbit',
      year: 2012,
      rating: 6,
      isGood: false
    }
  ];

  players: IPlayer[] = [
    { name: 'Pogba', age: 29, isActive: true },
    { name: 'Quaresma', age: 39, isActive: false },
    { name: 'Modric', age: 37, isActive: true }
  ];
}
