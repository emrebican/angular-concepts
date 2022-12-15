import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/models/constants';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['../../home/home.component.css', './pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemonList!: IPokemon[];

  // Dependency Injection usage
  constructor(private service: PokemonService) {
    this.pokemonList = [];
  }

  // When component first rendered, we'll got the pokemon data
  ngOnInit(): void {
    this.pokemonList = this.service.getPokemons();
    console.log('PokemonList Component rendered and get pokemonList');
  }

  handleRemove(event: IPokemon) {
    let newList = this.pokemonList.filter((pokemon) => pokemon.id !== event.id);
    this.pokemonList = newList;
  }
}
