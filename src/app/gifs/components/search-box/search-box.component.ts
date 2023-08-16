import { Component } from '@angular/core';

@Component({
  selector: 'gif-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="input"
    placeholder="Buscar">
  `,
})
export class SearchBoxComponent {
  constructor (){}
}
