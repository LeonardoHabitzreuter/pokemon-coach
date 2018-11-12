# pokemon-coach
You be able to see all your Pókemons and your personal profile

[![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Jest](https://github.com/facebook/jest).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Tools and libraries
 - [Angular 6](https://angular.io)
 - [Bootstrapp 4](https://getbootstrap.com/docs/4.0)
 - [Pokemon API](https://pokeapi.co)
 - [Primefaces](https://www.primefaces.org/primeng)
 - [Fontawesome](https://fontawesome.com)
 - [Sass](https://sass-lang.com)
 - [Ramda](https://ramdajs.com)
 - [Jest](https://jestjs.io)
 - Html5
 - Css3

## Important! Technical difficulties:
 - The [Pokemon API](https://pokeapi.co) pagination is broken! Because of that the pagination was implemented manually in this repo.
 - The [pokémons endpoint](https://pokeapi.co/api/v2/pokemon) return too few fields, just the pokémon's name and his URL. So I could barely show the pokémons information inside the grid.