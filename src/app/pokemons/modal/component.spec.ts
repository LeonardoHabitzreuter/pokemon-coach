import { Component } from '@angular/core'
import { TestBed, async } from '@angular/core/testing'
import { PokemonModalComponent } from './component'
import { Pokemon } from 'app/pokemons/pokemon'
import { PokemonsService } from 'app/pokemons/pokemons.service'
import { MessageService } from 'primeng/api'

describe('PokemonModalComponent', () => {
  const messageServiceStub: Partial<MessageService> = {
    add: jest.fn()
  }
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
    const component = fixture.debugElement.componentInstance
    expect(component).toBeTruthy()
  }))

  describe('Pokemon with no empty props', () => {
    let component
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
      component = fixture.debugElement.nativeElement
    })

    it('should render bulbasaur as the title', async(() => {
      expect(component.querySelector('#pokemonModalLabel').textContent).toContain('bulbasaur')
    }))

    it('should render all the skills', async(() => {
      expect(component.querySelector('#skillattack').textContent).toContain('attack')
      expect(component.querySelector('#skillprotect').textContent).toContain('protect')
    }))

    it('should add the pokemon to favorite list when click the button', async(() => {
      component.querySelector('#favoritePokemonButton').click()
      expect(pokemonsServiceStub.addToFavoritesList).toHaveBeenCalledWith(pokemon)
    }))
  })
})

@Component({
  selector: 'p-button',
  template: ''
})
class ButtonComponent {
}
