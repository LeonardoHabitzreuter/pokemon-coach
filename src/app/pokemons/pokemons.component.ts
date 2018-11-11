import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

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

  constructor(private pokemonsService: PokemonsService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchParameter: this.formBuilder.control('', [Validators.required])
    })

    this.updateGrid()
  }

  public searchPokemon() {
    const { searchParameter } = this.searchForm.value

    this.pokemonsService.getByIdOrName(searchParameter).subscribe(pokemon => this.pokemon = pokemon)
    $('#pokemonModal').modal('show')
  }

  public updateGrid(skip = 0) {
    this.pokemonsService.get(skip).subscribe(pokemons => {
      this.pokemons = pokemons
      this.totalRecords = this.pokemonsService.totalRecords
    })
  }
}
