import { Routes } from '@angular/router'

import { PokemonsComponent } from './pokemons/pokemons.component'
import { NotFoundComponent } from './not-found/not-found.component'

export const ROUTES: Routes = [
  {path: '', component: PokemonsComponent},
  {path: 'pokemons', component: PokemonsComponent},
  {path: '', loadChildren: './coach/coach.module#CoachModule'},
  {path: '**', component: NotFoundComponent}
]
