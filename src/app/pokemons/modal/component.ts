import { Component, Input } from '@angular/core';
import { Pokemon } from 'app/pokemons/pokemon'

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './component.html'
})
export class PokemonModalComponent {
  @Input() pokemon: Pokemon

  constructor() {}
}
