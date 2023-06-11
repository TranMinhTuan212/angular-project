import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {


  @Input() products: Array<Product> = [
  { id:1, image: 'ao1.webp', name: 'Áo Polo', price: 32000 },
  { id:2, image: 'ao2.webp', name: 'Áo Thun', price: 25000 },
  { id:3, image: 'ao3.webp', name: 'Áo Khoác', price: 30000 },
  { id:4, image: 'ao4.webp', name: 'Áo Sơ mi', price: 40000 },
  { id:5, image: 'ao5.webp', name: 'Áo Ni', price: 50000 },];


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

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}