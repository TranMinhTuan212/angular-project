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
  this.allSP = this.sanPham;
}
setSP(){
this.allSP = this.sanPham;
}
 sanPham:spMin[]=[
  { id: 1,name:"Áo",image:"/assets/storage/image/anh1.webp"},
  { id: 2,name:"Áo",image:"/assets/storage/image/anh4.webp"},
  { id: 3,name:"Áo",image:"/assets/storage/image/anh5.webp"},
  { id: 4,name:"Áo",image:"/assets/storage/image/anh6.webp"},
  { id: 5,name:"Áo",image:"/assets/storage/image/anh8.webp"},
  { id: 6,name:"Áo",image:"/assets/storage/image/anh9.webp"},
  { id: 7,name:"Áo",image:"/assets/storage/image/anh10.webp"},
]
sanPhamNam:spMin[]=[
  { id: 1,name:"Áo",image:"/assets/storage/image/anh4.webp"},
  { id: 2,name:"Áo",image:"/assets/storage/image/anh10.webp"},
  { id: 3,name:"Áo",image:"/assets/storage/image/anh9.webp"},
  { id: 4,name:"Áo",image:"/assets/storage/image/anh4.webp"},
  { id: 5,name:"Áo",image:"/assets/storage/image/anh8.webp"},
  { id: 6,name:"Áo",image:"/assets/storage/image/anh1.webp"},
  { id: 7,name:"Áo",image:"/assets/storage/image/anh6.webp"},
]

}
