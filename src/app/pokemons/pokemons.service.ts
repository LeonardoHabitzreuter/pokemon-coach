import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { POKEMONS_API } from 'app/api'
import { Pokemon } from './pokemon'

@Injectable()
export class PokemonsService {
  constructor (private http: HttpClient) {}

  public get (): Observable<Pokemon> {
    return this.http.get<Pokemon>(POKEMONS_API)
  }
}
