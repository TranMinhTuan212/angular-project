import { Component } from '@angular/core';
import { spMin } from './sp';

@Component({
  selector: 'app-main-sp',
  templateUrl: './main-sp.component.html',
  styleUrls: ['./main-sp.component.scss']
})
export class MainSPComponent {
content:string = "";
allSP:any ;
setSP1(){
  this.content="abc";
}
setSP(){
this.allSP = this.sanPham;
}
 sanPham:spMin[]=[
  { id: 1,name:"Áo chống nắng",image:"/assets/storage/image/image_home1.webp"},
  { id: 2,name:"Áo chống nắng",image:"/assets/storage/image/image_home1.webp"},
  { id: 3,name:"Áo chống nắng",image:"/assets/storage/image/image_home1.webp"},
  { id: 4,name:"Áo chống nắng",image:"/assets/storage/image/image_home1.webp"},
  { id: 5,name:"Áo chống nắng",image:"/assets/storage/image/image_home1.webp"},
  { id: 6,name:"Áo chống nắng",image:"/assets/storage/image/image_home1.webp"},
  { id: 7,name:"Áo chống nắng",image:"/assets/storage/image/image_home1.webp"},
]
}
