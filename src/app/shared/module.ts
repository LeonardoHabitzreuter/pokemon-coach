import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'
import { PaginatorModule } from 'primeng/paginator'
import { MessageService } from 'primeng/api'
import { ToastModule } from 'primeng/toast'
import { TableModule } from 'primeng/table'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { ConfirmationService } from 'primeng/api'

import { ContentHeaderComponent } from './content-header/content-header.component'
import { PokemonsService } from 'app/pokemons/pokemons.service'
import { StorageService } from './storage/storage-service'

@NgModule({
  declarations: [ContentHeaderComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, ButtonModule,
    PaginatorModule, ToastModule, TableModule, ConfirmDialogModule, InputTextModule
  ],
  exports: [
    CommonModule, FormsModule, ReactiveFormsModule, ButtonModule,
    PaginatorModule, ToastModule, TableModule, ConfirmDialogModule, ContentHeaderComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [PokemonsService, StorageService, MessageService, ConfirmationService]
    }
  }
}
