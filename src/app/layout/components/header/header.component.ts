import {Component, OnDestroy, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../@core/services/token-storage/token-storage.service";
import {AppUser} from "../../../@core/models/user.model";
import {Router} from "@angular/router";
import jwt_decode from 'jwt-decode';
import {TOKEN_KEY} from "../../../@shared/constants";
import {Token} from "../../../@core/models/token.model";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  currentUser!: AppUser | null;

  hasDashboardAccess = false

  private currentUserSubscription!: Subscription;
  hasAdminAccess = false;


  constructor(private tokenStorageService: TokenStorageService, private router: Router) {}

  ngOnInit() {
    const token = this.tokenStorageService.getToken(TOKEN_KEY);

    this.currentUserSubscription = this.tokenStorageService.currentUser$.subscribe(
      user => {
        this.currentUser = user;
      },
      error => {
        console.log(error);
      }
    );

    if(token == null)
      this.hasDashboardAccess = false;
    else {
      this.hasDashboardAccess = this.hasAdminOrTrainerRole(token);
      this.hasAdminAccess = this.hasAdminRole(token);
    }

  }

  ngOnDestroy() {
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }
  }

  hasAdminOrTrainerRole(token: Token): boolean {
    const decodedToken: any = jwt_decode(token.token);
    const roles: string[] = decodedToken.roles;
    const validRoles = ['ROLE_TRAINER', 'ROLE_ADMIN'];
    return validRoles.some(el => roles.includes(el));
  }

  hasAdminRole(token: Token): boolean {
    const decodedToken: any = jwt_decode(token.token);
    const roles: string[] = decodedToken.roles;
    console.log(roles);
    const validRoles = ['ROLE_ADMIN'];
    return validRoles.some(el => roles.includes(el));
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
