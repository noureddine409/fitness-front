import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-our-services-items',
  templateUrl: './our-services-items.component.html',
  styleUrls: ['./our-services-items.component.css']
})
export class OurServicesItemsComponent {
  constructor(private router: Router) {
  }
  goToOtherComponent(url:string) {
    this.router.navigate([url]);
  }
  setScrollPosition(position: number) {
    window.scrollTo(0, position);
  }

}
