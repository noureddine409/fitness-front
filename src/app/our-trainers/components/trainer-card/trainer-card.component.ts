import {Component, Input} from '@angular/core';
import {AppUser} from "../../../@core/models/user.model";

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.css']
})
export class TrainerCardComponent {
  @Input() trainer!:AppUser;

}
