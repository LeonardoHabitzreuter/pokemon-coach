import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'app/pokemons/pokemons.service'
import { MessageService } from 'primeng/api'
import { Pokemon } from 'app/pokemons/pokemon'

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: []
})
export class CoachComponent implements OnInit {
  favoritePokemons: Pokemon[]

  constructor(private messageService: MessageService, private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.updateGrid()
  }

  removePokemon(id: number) {
    this.pokemonsService.removeFromFavoritesList(id).then(() => {
      this.messageService.add({severity: 'success', summary: 'Success!', detail: 'The pokemon was removed from your list'})
      this.updateGrid()
    })
  }

  updateGrid() {
    this.pokemonsService.getFavoritePokemons().then(pokemons => {
      this.favoritePokemons = pokemons
    })
  }
}
