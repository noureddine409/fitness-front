import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {REFRESH_TOKEN_KEY} from "../../../@shared/constants";
import {UserService} from "../../services/user-service/user.service";
import {TokenStorageService} from "../../services/token-storage/token-storage.service";
import {AuthService} from "../../services/authentication/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router, private tokenStorageService: TokenStorageService, private authService: AuthService) {
  }

  canActivate(): Observable<boolean> {
    return this.tokenStorageService.currentUser$.pipe(
      map(user => {
        const refreshToken = this.tokenStorageService.getToken(REFRESH_TOKEN_KEY)
        console.log("refresh token guard", refreshToken)
        if (refreshToken == null || this.authService.isTokenExpired(refreshToken)) {
          this.router.navigate(["/home"]);
          return false;
        } else {
          return true;
        }
      })
    );
  }

}
