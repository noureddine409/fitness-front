import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {ServiceItemModel} from "../@core/models/service-item.model";

@Component({
  selector: 'app-our-services-items',
  templateUrl: './our-services-items.component.html',
  styleUrls: ['./our-services-items.component.css']
})
export class OurServicesItemsComponent {
  @Input()
  serviceItems!: ServiceItemModel[];
  constructor(private router: Router) {
  }



  goToOtherComponent(url: string) {
    this.router.navigate([url]);
  }

  setScrollPosition(position: number) {
    window.scrollTo(0, position);
  }

}
