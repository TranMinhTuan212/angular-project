import { Component } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {


  public isVisable = false;

  public content: string = '';

  public isSearch = false;

  constructor(){
  }

  show(): void{
    this.isVisable = true;
  }

  hiden(): void{
    this.isVisable = false;
  }

  resertInput(): void {
    this.content = '';
  }
}
