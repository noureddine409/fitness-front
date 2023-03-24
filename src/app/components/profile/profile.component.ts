import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user-service/user.service";
import {AppUser} from "../../models/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  user!: AppUser;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
      value => this.user = value,
      error => console.log(error)
    )
  }

}
