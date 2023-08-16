import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gif-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="input"
    placeholder="Buscar"
    (keyup.enter)="searchTag()"
    #txtTagInput
    >
  `
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput !: ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService  ) { }

  // ? Metodo de Referencia Local
  // searchTag(newTag: string): void{
  //   console.log(newTag);
  // }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
