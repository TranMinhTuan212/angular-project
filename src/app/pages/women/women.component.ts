import { Component,Input } from '@angular/core';
import { products } from 'src/app/components/main-item/products';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent {
  @Input() mainItem!: products;
}
