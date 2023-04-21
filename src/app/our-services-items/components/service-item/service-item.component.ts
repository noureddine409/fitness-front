import {Component, Input} from '@angular/core';
import {ServiceItemModel} from "../../../@core/models/service-item.model";

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent {
  @Input() serviceItem!: ServiceItemModel;
  setScrollPosition(position: number) {
    window.scrollTo(0, position);
  }

}
