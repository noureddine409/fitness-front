import {Component, Input} from '@angular/core';
import {AppUser} from "../../../@core/models/user.model";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  @Input()
  user!: AppUser;

}
