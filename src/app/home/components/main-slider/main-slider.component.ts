import { Component, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class MainSliderComponent {
  constructor(private router:Router) {
  }
  goToOtherComponent(url:string) {
    this.router.navigate([url]);
  }

}
