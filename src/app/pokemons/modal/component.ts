import { Component, Input } from '@angular/core'
import { Pokemon } from 'app/pokemons/pokemon'
import { PokemonsService } from 'app/pokemons/pokemons.service'
import { MessageService } from 'primeng/api'

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class PokemonModalComponent {
  @Input() pokemon: Pokemon

  constructor(private messageService: MessageService, private pokemonsService: PokemonsService) {}

  favoritePokemon() {
    this.pokemonsService.addToFavoritesList(this.pokemon).then(() => {
      this.messageService.add({severity: 'success', summary: 'Success!', detail: 'The pokemon was added to your favorites list'})
    })
  }
}
