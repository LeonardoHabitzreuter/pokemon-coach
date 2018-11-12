import { Component } from '@angular/core'
import { TestBed, async } from '@angular/core/testing'
import { PokemonModalComponent } from './component'
import { Pokemon } from 'app/pokemons/pokemon'
import { PokemonsService } from 'app/pokemons/pokemons.service'
import { MessageService } from 'primeng/api'

describe('PokemonModalComponent', () => {
  const messageServiceStub: Partial<MessageService> = {}
  const pokemonsServiceStub: Partial<PokemonsService> = {
    addToFavoritesList: jest.fn().mockResolvedValue(null)
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PokemonModalComponent,
        ButtonComponent
      ],
      providers: [
        {provide: PokemonsService, useValue: pokemonsServiceStub },
        {provide: MessageService, useValue: messageServiceStub }
      ]
    }).compileComponents()
  }))

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(PokemonModalComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

  describe('Pokemon with no empty props', () => {
    let compiled
    const pokemon = new Pokemon()
    pokemon.id = 1
    pokemon.name = 'bulbasaur'
    pokemon.base_experience = 64
    pokemon.height = 74
    pokemon.weight = 60
    pokemon.abilities = [{
      ability: {name: 'attack'}
    }, {
      ability: {name: 'protect'}
    }]

    beforeEach(() => {
      const fixture = TestBed.createComponent(PokemonModalComponent)
      fixture.componentInstance.pokemon = pokemon
      fixture.detectChanges()
      compiled = fixture.debugElement.nativeElement
    })

    it('should render bulbasaur as the title', async(() => {
      expect(compiled.querySelector('#pokemonModalLabel').textContent).toContain('bulbasaur')
    }))
  })
})

@Component({
  selector: 'p-button',
  template: ''
})
class ButtonComponent {
}
