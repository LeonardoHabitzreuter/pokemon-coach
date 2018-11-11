import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { drop, take, append } from 'ramda'

import { POKEMONS_API } from 'app/api'
import { Pokemon } from './pokemon'
import { StorageService } from 'shared/storage/storage-service'

const FAVORITES_POKEMONS_STORAGE_KEY = 'favorite_pokemons'

@Injectable()
export class PokemonsService {
  // this code was commented because the api pagination is broken
  // private searchParams: HttpParams
  public totalRecords: number

  constructor(private http: HttpClient, private storageService: StorageService) {
    // this code was commented because the api pagination is broken
    // this.searchParams = new HttpParams().set('limit', '10')
  }

  public get(skip = 0): Observable<Pokemon[]> {
    return this.http.get(POKEMONS_API).pipe(
      map((data: any) => {
        this.totalRecords = data.results.length
        return take(10, drop(skip, data.results))
      })
    )
  }

  public getByIdOrName(idOrName): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${POKEMONS_API}${idOrName}/`)
  }

  public getFavoritePokemons(): Promise<Pokemon[]> {
    return new Promise(resolve => resolve(JSON.parse(localStorage.getItem(FAVORITES_POKEMONS_STORAGE_KEY)) || []))
  }

  public addToFavoritesList(pokemon: Pokemon) {
    return new Promise(async resolve => {
      const favoritePokemons = await this.getFavoritePokemons()
      if (!favoritePokemons.some(favorite => favorite.name === pokemon.name)) {
        this.storageService.updateStorage(FAVORITES_POKEMONS_STORAGE_KEY, append(pokemon, favoritePokemons))
      }
      resolve()
    })
  }

  public removeFromFavoritesList = (id: number) => new Promise(async resolve => {
    const pokemons = await this.getFavoritePokemons()
    this.storageService.updateStorage(FAVORITES_POKEMONS_STORAGE_KEY, pokemons.filter(pokemon => pokemon.id !== id))
    resolve()
  })
}
