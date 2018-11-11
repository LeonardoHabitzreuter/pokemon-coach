import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MessageService } from 'primeng/api'

import { PokemonsService } from './pokemons.service'
import { Pokemon } from './pokemon'

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: []
})
export class PokemonsComponent implements OnInit {
  searchForm: FormGroup
  pokemons: Pokemon[]
  pokemon: Pokemon
  totalRecords = 10

  constructor(private messageService: MessageService, private pokemonsService: PokemonsService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchParameter: this.formBuilder.control('', [Validators.required])
    })

    this.updateGrid()
  }

  public searchPokemon() {
    const { searchParameter } = this.searchForm.value

    this.pokemonsService.getByIdOrName(searchParameter).subscribe(
      pokemon => {
        this.pokemon = pokemon
        $('#pokemonModal').modal('show')
      },
      error => {
        if (error.status === 0) {
          this.messageService.add({
            severity: 'error',
            summary: 'The pokémon was not found',
            detail: 'Try to search for another pokémon'
          })
        }
      }
    )
  }

  public updateGrid(skip = 0) {
    this.pokemonsService.get(skip).subscribe(pokemons => {
      this.pokemons = pokemons
      this.totalRecords = this.pokemonsService.totalRecords
    })
  }
}
