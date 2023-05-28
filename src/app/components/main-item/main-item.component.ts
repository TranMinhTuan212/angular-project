import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { main } from './main-item';
import { products } from './products';

@Component({
  selector: 'app-main-item',
  templateUrl: './main-item.component.html',

  styleUrls: ['./main-item.component.scss'],
 
})
export class MainItemComponent implements OnInit{
    mainItem: main[] | null = null;
    trackBy(index: number, Demo: main){
      return Demo ? Demo.id : undefined;
    }
    product: products[] = [
      {id:11,name:"abc",image:"/assets/storage/image/ao_nu1.webp"},
      {id:12,name:"abc",image:"/assets/storage/image/ao_nu1.webp"},
      {id:13,name:"abc",image:"/assets/storage/image/ao_nu1.webp"},
      {id:14,name:"abc",image:"/assets/storage/image/ao_nu1.webp"}
    ];
  customOptions: OwlOptions = {
    margin:10,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

    this.mainItem = [
      new main(1,"Áo Polo Nam Mắt Chim Bo Hiệu Ứng ","195.000","-50%","/assets/storage/image/aonam1.webp","/assets/storage/image/ao_nu1.webp","Đã bán 141k"),
      new main(2,"Áo Polo Nam Mắt Chim Bo Hiệu Ứng ","195.000","-30%","/assets/storage/image/aonam2.webp","/assets/storage/image/ao_nu1.webp","Đã bán 120k"),
      new main(3,"Áo Polo Nam Pique Mắt Chim Basic ","300.000","-10%","/assets/storage/image/aonam3.webp","/assets/storage/image/ao_nu1.webp","Đã bán 100k"),
      new main(4,"Áo Polo Nam Mắt Chim Bo Hiệu Ứng ","195.000","-80%","/assets/storage/image/aonam4.webp","/assets/storage/image/ao_nu1.webp","Đã bán 123k"),
      new main(5,"Áo Polo Nam Mắt Chim Bo Hiệu Ứng ","195.000","-40%","/assets/storage/image/ao_nu1.webp","/assets/storage/image/ao_nu1.webp","Đã bán 101k")
    ];  
  }
  ngOnInit(): void {  
  }
}

