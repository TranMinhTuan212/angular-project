import { Component, Input } from '@angular/core';
import { main } from 'src/app/components/main-item/main-item';

@Component({
  selector: 'app-children',
  template:`h1`,
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent {
@Input() mainItem!: main;


}
