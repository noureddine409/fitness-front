import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {map, Observable} from 'rxjs';
import {UserService} from "../../services/user-service/user.service";
import {REFRESH_TOKEN_KEY} from "../../../@shared/constants";
import {TokenStorageService} from "../../services/token-storage/token-storage.service";
import {AuthService} from "../../services/authentication/auth.service";

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router, private tokenStorageService: TokenStorageService, private authService: AuthService) {
  }


  canActivate(): Observable<boolean> {
    return this.tokenStorageService.currentUser$.pipe(
      map(user => {
        const refreshToken = this.tokenStorageService.getToken(REFRESH_TOKEN_KEY)
        console.log("refresh token guard", refreshToken)
        if ( refreshToken == null || this.authService.isTokenExpired(refreshToken)) {
          return true;
        } else if (user?.profileCompleted) {
          console.log('completed', user?.profileCompleted)
          return true; // allow access to protected route if the user is authenticated and their profile is complete
        } else {
          console.log(user)
          this.router.navigate(['/complete-profile']); // redirect to complete profile page if the user is authenticated but their profile is incomplete
          return false;
        }
      })
    );
  }


}
