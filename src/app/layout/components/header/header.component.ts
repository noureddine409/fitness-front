import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TokenStorageService} from "../../../@core/services/token-storage/token-storage.service";
import {AppUser} from "../../../@core/models/user.model";
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
  goToOtherComponent(url:string) {
    this.router.navigate([url]);
  }

  logOut() {
    this.tokenStorageService.setCurrentUser(null);
    this.tokenStorageService.signOut();
    this.router.navigate(['/home'])
  }
}
