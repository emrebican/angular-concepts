import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from '../services/pokemon.service';

@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent],
  imports: [CommonModule, FormsModule],
  exports: [PokemonListComponent, PokemonDetailComponent],
  providers: [PokemonService]
})
export class PokemonBaseModule {}
