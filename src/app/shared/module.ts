import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'
import { PaginatorModule } from 'primeng/paginator'

import { ContentHeaderComponent } from './content-header/content-header.component'
import { PokemonsService } from '../pokemons/pokemons.service'

@NgModule({
  declarations: [ContentHeaderComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonModule, PaginatorModule, InputTextModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonModule, PaginatorModule, ContentHeaderComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [PokemonsService]
    }
  }
}
