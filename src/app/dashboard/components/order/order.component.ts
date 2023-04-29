import {Component, Input} from '@angular/core';
import {ProgramEnrollment} from "../../../@core/models/enrollment.model";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  @Input() order!: ProgramEnrollment;


}
