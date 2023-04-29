import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {REFRESH_TOKEN_KEY, TOKEN_KEY} from "../../../@shared/constants";
import {Token} from "../../models/token.model";
import jwt_decode from "jwt-decode";
import {UserService} from "../../services/user-service/user.service";
import {TokenStorageService} from "../../services/token-storage/token-storage.service";
import {AuthService} from "../../services/authentication/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router, private tokenStorageService: TokenStorageService, private authService: AuthService) {
  }

  canActivate() {

    const refreshToken = this.tokenStorageService.getToken(REFRESH_TOKEN_KEY)
    const accessToken = this.tokenStorageService.getToken(TOKEN_KEY)
    if (refreshToken == null || this.authService.isTokenExpired(refreshToken)) {
      this.router.navigate(["/login"]);
      return false;
    } else {
    }
    if (accessToken && this.hasAdminRole(accessToken)) {
      return true
    }
    this.router.navigate(["/error-404"]);
    return false;
  }


  hasAdminRole(token: Token): boolean {
    const decodedToken: any = jwt_decode(token.token);
    const roles: string[] = decodedToken.roles;
    const validRoles = ['ROLE_ADMIN'];
    return validRoles.some(el => roles.includes(el));
  }

}
