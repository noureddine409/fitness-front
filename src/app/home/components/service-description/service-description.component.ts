import {Component, Input} from '@angular/core';
import {ServiceItemModel} from "../../../@core/models/service-item.model";

@Component({
  selector: 'app-service-description',
  templateUrl: './service-description.component.html',
  styleUrls: ['./service-description.component.css']
})
export class ServiceDescriptionComponent {
  @Input() serviceItem!: ServiceItemModel;

}
