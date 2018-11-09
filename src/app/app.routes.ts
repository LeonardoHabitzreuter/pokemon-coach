import { Routes } from '@angular/router';

import { PokemonsComponent } from './pokemons/pokemons.component';
import { CoachComponent } from './coach/coach.component';

export const ROUTES: Routes = [
  {path: '', component: PokemonsComponent},
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'coach', component: CoachComponent}
];
