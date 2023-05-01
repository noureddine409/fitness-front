import {Component, OnInit} from '@angular/core';
import {UserService} from "../@core/services/user-service/user.service";
import {AppUser} from "../@core/models/user.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-public-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{


  user!: AppUser;

  userId!: number

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute){

  }


  ngOnInit() {
    const param = this.activatedRoute.snapshot.paramMap.get("id")

    if(param ==null) {
      this.router.navigate(['/error-404']);
      return
    }
    this.userId = parseInt(param , 10);
    this.userService.findByUser(this.userId).subscribe(
      value => {
        this.user = value
      })
  }

}
