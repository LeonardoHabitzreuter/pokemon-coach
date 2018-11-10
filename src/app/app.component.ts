import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'pokémons coach project'
  menuItems: MenuItem[]

  ngOnInit() {
    this.menuItems = [
      {label: 'Pokemons', icon: 'pi pi-fw pi-home', routerLink: ['/pokemons']},
      {label: 'Coach', icon: 'pi pi-fw pi-user', routerLink: ['/coach']}
    ]
  }
}
