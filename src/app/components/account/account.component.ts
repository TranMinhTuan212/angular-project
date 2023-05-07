import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  @Output() closeAccount = new EventEmitter();

  close(): void {
    this.closeAccount.emit();
  }

}
