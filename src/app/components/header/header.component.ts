import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TokenStorageService} from "../../services/token-storage/token-storage.service";
import {AppUser} from "../../models/user.model";
import {Router} from "@angular/router";
import {SocialAuthService} from "@abacritt/angularx-social-login";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() logout = new EventEmitter<void>();
  currentUser!: AppUser | null;

  constructor(private tokenStorageService: TokenStorageService, private router: Router, private socialAuthService: SocialAuthService) {}

  ngOnInit() {
    this.tokenStorageService.currentUser$.subscribe(
      user => {
        this.currentUser = user;
      },
      error => {
        console.log(error);
      }
    );
  }

  logOut() {
    this.tokenStorageService.setCurrentUser(null);
    this.tokenStorageService.signOut();
    this.router.navigate(['/home'])
  }
}
