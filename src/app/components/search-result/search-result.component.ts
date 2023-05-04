import { Component, Input } from '@angular/core';
import { Product } from '../search/search.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {

  @Input() product!: Product;
  
}

