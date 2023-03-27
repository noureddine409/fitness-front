import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../services/token-storage/token-storage.service";
import {AppUser} from "../../models/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  currentUser!: AppUser | null
  constructor(private tokenStorageService: TokenStorageService) {

  }

  ngOnInit() {
    this.tokenStorageService.currentUser$.subscribe(
      user => {
        this.currentUser = user;
      },
      error => {
        console.log(error);
      }
    )
  }


}
