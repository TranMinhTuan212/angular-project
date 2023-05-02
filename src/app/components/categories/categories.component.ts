import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {

  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
  }

}
