import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

import { PokemonsService } from './pokemons.service'

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  searchForm: FormGroup

  constructor(private pokemonsService: PokemonsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      id: this.formBuilder.control(''),
      name: this.formBuilder.control('')
    })
  }

  public searchPokemon() {
    this.pokemonsService.get().subscribe(response => console.log(response))
  }

}
