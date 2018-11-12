import { TestBed, async } from '@angular/core/testing'
import { ContentHeaderComponent } from './content-header.component'

describe('ContentHeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContentHeaderComponent
      ],
    }).compileComponents()
  }))

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(ContentHeaderComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

  it('should render Hello world! as the title', async(() => {
    const fixture = TestBed.createComponent(ContentHeaderComponent)
    fixture.componentInstance.title = 'Hello world!'
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('Hello world!')
  }))
})
