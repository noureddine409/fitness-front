import {Component, Input} from '@angular/core';
import {TrainerModel} from "../../../@core/models/trainer.model";

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.css']
})
export class TrainerCardComponent {
  @Input() trainer!:TrainerModel;

}
