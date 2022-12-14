import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/models/constants';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['../../home/home.component.css', './pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList!: IPokemon[];

  // Dependency Injection usage
  constructor(private service: PokemonService) {
    this.pokemonList = [];
  }

  // When component first rendered, we'll got the pokemon data
  ngOnInit(): void {
    /* Working service data */
    this.pokemonList = this.service.getPokemons();

    /* Working with an API (json-server) */
    /* this.service.getPokemons().subscribe((data: any) => {
      this.pokemonList = data;
      console.log(data);
    }); */
  }

  handleRemove(event: IPokemon) {
    let newList = this.pokemonList.filter((pokemon) => pokemon.id !== event.id);
    this.pokemonList = newList;
  }

  handleToggle(event: IPokemon) {
    this.pokemonList = this.pokemonList.map((pokemon) =>
      pokemon.id === event.id
        ? {
            ...pokemon,
            isCool: !pokemon.isCool
          }
        : pokemon
    );
  }
}
