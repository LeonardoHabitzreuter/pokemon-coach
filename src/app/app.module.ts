import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { RouterModule, PreloadAllModules } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { TableModule } from 'primeng/table'
import { TabMenuModule } from 'primeng/tabmenu'

import { SharedModule } from 'shared/module'
import { ROUTES } from './app.routes'

import { AppComponent } from './app.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { PokemonsComponent } from './pokemons/pokemons.component'
import { PokemonModalComponent } from './pokemons/modal/component'

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PokemonsComponent,
    PokemonModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    TabMenuModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
