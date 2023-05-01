import { Component, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {

  images = ['forest.jpg', 'nature.jpg', 'tiger.jpg', 'wedding.jpg', 'beach.jpg', 'men.jpg'].map((n) => `../../../assets/storage/image/${n}`);

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;

	@ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

	constructor(ngbConfig: NgbConfig) {
    ngbConfig.animation = true;
  }
  
}
