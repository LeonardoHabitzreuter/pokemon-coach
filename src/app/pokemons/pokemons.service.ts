import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { pipe as compose, drop, take, tap } from 'ramda'

import { POKEMONS_API } from 'app/api'
import { Pokemon } from './pokemon'

@Injectable()
export class PokemonsService {
  // this code was commented because the api pagination is broken
  // private searchParams: HttpParams

  constructor (private http: HttpClient) {
    // this code was commented because the api pagination is broken
    // this.searchParams = new HttpParams().set('limit', '10')
  }

  public get (skip = 0): Observable<Pokemon[]> {
    return this.http.get(POKEMONS_API).pipe(
      map((data: any) => take(10, drop(skip, data.results)))
    )
  }
}
