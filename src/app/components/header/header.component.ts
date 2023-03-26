import {Component, Input} from '@angular/core';
import {AppUser} from "../../models/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() currentUser!: AppUser | null ;

}
