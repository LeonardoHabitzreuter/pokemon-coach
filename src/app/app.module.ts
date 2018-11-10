import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { RouterModule, PreloadAllModules } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { TabMenuModule } from 'primeng/tabmenu'
import { ButtonModule } from 'primeng/button'
import { TableModule } from 'primeng/table'

import { SharedModule } from 'shared/module'
import { ROUTES } from './app.routes'

import { AppComponent } from './app.component'
import { PokemonsComponent } from './pokemons/pokemons.component'

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TabMenuModule,
    ButtonModule,
    TableModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
