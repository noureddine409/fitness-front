import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {map, Observable} from 'rxjs';
import {REFRESH_TOKEN_KEY, TOKEN_KEY} from "../../../@shared/constants";
import {UserService} from "../../services/user-service/user.service";
import {TokenStorageService} from "../../services/token-storage/token-storage.service";
import {AuthService} from "../../services/authentication/auth.service";
import {Token} from "../../models/token.model";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router, private tokenStorageService: TokenStorageService, private authService: AuthService) {
  }

  canActivate() {

    const refreshToken = this.tokenStorageService.getToken(REFRESH_TOKEN_KEY)
    const accessToken = this.tokenStorageService.getToken(TOKEN_KEY)
    console.log("refresh token guard", refreshToken)
    if (refreshToken == null || this.authService.isTokenExpired(refreshToken)) {
      this.router.navigate(["/login"]);
      return false;
    } else {
    }
    if (accessToken && this.hasAdminOrTrainerRole(accessToken)) {
      return true
    }
    this.router.navigate(["/error-404"]);
    return false;
  }


  hasAdminOrTrainerRole(token: Token): boolean {
    const decodedToken: any = jwt_decode(token.token);
    const roles: string[] = decodedToken.roles;
    console.log(roles);
    const validRoles = ['ROLE_TRAINER', 'ROLE_ADMIN'];
    return validRoles.some(el => roles.includes(el));
  }

}
