import {Component} from '@angular/core';

@Component({
  template: `
    @defer {
      <button></button>
    } @placeholder (minimum 2s) {
      <img src="placeholder.gif">
    }
  `,
})
export class MyApp {
}
