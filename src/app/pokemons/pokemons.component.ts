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

  constructor(private pokemonsService: PokemonsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchParameter: this.formBuilder.control('', [Validators.required])
    })

    this.pokemonsService.get().subscribe(pokemons => this.pokemons = pokemons)
  }

  public searchPokemon() {
    const { searchParameter } = this.searchForm.value

    if (searchParameter) {
      this.pokemonsService.getByIdOrName(searchParameter).subscribe(pokemon => this.pokemon = pokemon)
    } else {
      this.pokemonsService.get().subscribe(pokemons => this.pokemons = pokemons)
    }
  }
}
