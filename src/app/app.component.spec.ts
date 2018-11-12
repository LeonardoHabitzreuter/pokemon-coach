import { Component, Input } from '@angular/core'
import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToastComponent,
        ConfirmDialogComponent,
        TabMenuComponent,
        RouterOutletComponent
      ],
    }).compileComponents()
  }))

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

  it(`should have as title 'pokemon-coach'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('pokémons coach project')
  }))

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to pokémons coach project!')
  }))
})

@Component({
  selector: 'p-toast',
  template: ''
})
class ToastComponent {
}

@Component({
  selector: 'p-confirmDialog',
  template: ''
})
class ConfirmDialogComponent {
}

@Component({
  selector: 'p-tabMenu',
  template: ''
})
class TabMenuComponent {
  @Input() styleClass: string
  @Input() model: any[]
  @Input() activeItem: any
}

@Component({
  selector: 'router-outlet',
  template: ''
})
class RouterOutletComponent {
}
