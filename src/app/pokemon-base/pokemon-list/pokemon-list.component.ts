import { Component } from '@angular/core';
import { IPokemon } from 'src/app/models/constants';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['../../home/home.component.css', './pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemonList: IPokemon[];

  constructor() {
    this.pokemonList = [
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

  handleRemove(event: IPokemon) {
    let newList = this.pokemonList.filter((pokemon) => pokemon.id !== event.id);
    this.pokemonList = newList;
  }
}
