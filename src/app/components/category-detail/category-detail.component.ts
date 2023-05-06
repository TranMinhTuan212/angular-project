import { Component, Input } from '@angular/core';

import { Product } from '../search/search.component';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent {
  @Input() type!: string;

  public imgNu = 'out-standing-nu.webp';
  public imgNam = 'out-standing-nam.webp';
  public imgTrêm = 'out-standing-tre-em.webp';

  @Input() productNu: Array<Product> = [
    { id: 1, image: 'ao1.webp', name: 'Áo Polo giành cho nữ ', price: 32000 },
    { id: 2, image: 'ao2.webp', name: 'Áo Thun giành cho nữ', price: 25000 },
    { id: 3, image: 'ao3.webp', name: 'Áo Khoác giành cho nữ', price: 30000 },
    { id: 4, image: 'ao4.webp', name: 'Áo Sơ mi giành cho nữ', price: 40000 },
    { id: 5, image: 'ao5.webp', name: 'Áo Ni giành cho nữ', price: 50000 },
  ];

  @Input() productNam: Array<Product> = [
    {
      id: 1,
      image: 'ao-nam-1.webp',
      name: 'Áo Polo giành cho nam ',
      price: 32000,
    },
    {
      id: 2,
      image: 'ao-nam-2.webp',
      name: 'Áo Thun giành cho nam',
      price: 25000,
    },
    {
      id: 3,
      image: 'ao-nam-3.webp',
      name: 'Áo Khoác giành cho nam',
      price: 30000,
    },
    {
      id: 4,
      image: 'ao-nam-4.webp',
      name: 'Áo Sơ mi giành cho nam',
      price: 40000,
    },
    {
      id: 5,
      image: 'ao-nam-5.webp',
      name: 'Áo Ni giành cho nam',
      price: 50000,
    },
  ];

  @Input() productTreEm: Array<Product> = [
    {
      id: 1,
      image: 'tre-em-1.webp',
      name: 'Áo Polo giành cho trẻ em ',
      price: 32000,
    },
    {
      id: 2,
      image: 'tre-em-2.webp',
      name: 'Áo Thun giành cho trẻ em',
      price: 25000,
    },
    {
      id: 3,
      image: 'tre-em-3.webp',
      name: 'Áo Khoác giành cho trẻ em',
      price: 30000,
    },
    {
      id: 4,
      image: 'tre-em-4.webp',
      name: 'Áo Sơ mi giành cho trẻ em',
      price: 40000,
    },
    {
      id: 5,
      image: 'tre-em-5.webp',
      name: 'Áo Ni giành cho trẻ em',
      price: 50000,
    },
  ];
}
