import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'
import { PaginatorModule } from 'primeng/paginator'
import { MessageService } from 'primeng/api'
import { ToastModule } from 'primeng/toast';

import { ContentHeaderComponent } from './content-header/content-header.component'
import { PokemonsService } from 'app/pokemons/pokemons.service'
import { StorageService } from './storage/storage-service'

@NgModule({
  declarations: [ContentHeaderComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonModule, PaginatorModule, ToastModule, InputTextModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonModule, PaginatorModule, ToastModule, ContentHeaderComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [PokemonsService, StorageService, MessageService]
    }
  }
}
