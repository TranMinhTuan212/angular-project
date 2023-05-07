import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('account') account!: ElementRef;
  @ViewChild('menuDark') menuDark!: ElementRef;

  @ViewChild('category') category!: ElementRef;

  showAccount(): void {
    this.account.nativeElement.style.display = 'block';
    this.menuDark.nativeElement.classList.toggle('d-none');
  }

  hidenAccount(): void {
    this.account.nativeElement.style.display = 'none';
    if(window.innerWidth < 740){
      this.category.nativeElement.style.display = 'none';
    }
    this.menuDark.nativeElement.classList.toggle('d-none');
  }

  showCategory(): void {
    this.category.nativeElement.style.display = 'block';
    this.menuDark.nativeElement.classList.toggle('d-none');
  }
}
