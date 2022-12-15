import { Injectable } from '@angular/core';
import { IPokemon } from '../models/constants';

@Injectable()
export class PokemonService {
  constructor() {}

  // We'll return an array of pokemon
  // So our pokemon data will be stored in this service
  getPokemons(): IPokemon[] {
    return [
      {
        id: 1,
        name: 'pikachu',
        type: 'electric',
        isCool: false,
        isStylish: true
      },
      {
        id: 2,
        name: 'charmander',
        type: 'fire',
        isCool: true,
        isStylish: true
      },
      {
        id: 3,
        name: 'squirtle',
        type: 'water',
        isCool: false,
        isStylish: false
      }
    ];
  }
}
