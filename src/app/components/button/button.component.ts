import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() leftIcon!:string;
  @Input() rightIcon!:string;
  @Input() text!:string;
  @Input() tooltip!:string;
  @Input() style!:string;
  @Input() size!:string;

}
