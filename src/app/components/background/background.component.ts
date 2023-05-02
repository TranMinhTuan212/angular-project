import { Component, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent {

  images = [
    'slider_1.jpg',
    'slider_2.jpg',
  ].map((n) => `../../../assets/storage/image/${n}`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;
}
