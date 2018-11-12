import { Component, Input } from '@angular/core'
import { PokemonsService } from 'app/pokemons/pokemons.service'
import { MessageService } from 'primeng/api'
import { ConfirmationService } from 'primeng/api'
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachComponent } from './coach.component';

describe('CoachComponent', () => {
  let component: CoachComponent;
  let fixture: ComponentFixture<CoachComponent>;
  const confirmationServiceStub: Partial<ConfirmationService> = {

  }
  const pokemonsServiceStub: Partial<PokemonsService> = {
    getFavoritePokemons: jest.fn().mockResolvedValue([])
  }
  const messageServiceStub: Partial<MessageService> = {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachComponent, AppContentHeaderComponent, TableComponent ],
      providers: [
        {provide: ConfirmationService, useValue: confirmationServiceStub },
        {provide: PokemonsService, useValue: pokemonsServiceStub },
        {provide: MessageService, useValue: messageServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-content-header',
  template: ''
})
class AppContentHeaderComponent {
  @Input() title: string
}

@Component({
  selector: 'p-table',
  template: ''
})
class TableComponent {
  @Input() value: any[]
}
