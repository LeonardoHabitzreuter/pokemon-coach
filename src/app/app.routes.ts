import { Routes } from '@angular/router'

import { PokemonsComponent } from './pokemons/pokemons.component'

export const ROUTES: Routes = [
  {path: '', component: PokemonsComponent},
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'coach', loadChildren: './coach/coach.module#CoachModule'}
]
