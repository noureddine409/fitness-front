import {Component, OnInit} from '@angular/core';
import {AppUser} from "./models/user.model";
import {UserService} from "./services/user-service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authenticatedUser!: AppUser

  constructor(private userService: UserService) {
  }


  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
      value => {
        console.log("ng init app called")
        this.authenticatedUser = value;
        console.log(this.authenticatedUser)
      }
    )
  }


}
