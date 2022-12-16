import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemon } from '../models/constants';

const POKEMON_URL = 'http://localhost:3000/pokemons';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

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

  // Working with request --- Observable (async works)
  /* getPokemons(): Observable<IPokemon> {
    return this.http.get<IPokemon>(POKEMON_URL);
  } */
}
