import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {map, Observable} from 'rxjs';
import {UserService} from "../../services/user-service/user.service";
import {REFRESH_TOKEN_KEY} from "../../constants/constants";
import {TokenStorageService} from "../../services/token-storage/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router, private tokenStorageService: TokenStorageService) {
  }

  // canActivate(): Observable<boolean> {
  //   return this.userService.getCurrentUser().pipe(
  //     map(user => {
  //       if (user.profileCompleted) {
  //         return true; // allow access to protected route
  //       } else {
  //         this.router.navigate(['/complete-profile']); // redirect to complete profile page
  //         return false;
  //       }
  //     })
  //   );
  // }


  canActivate(): Observable<boolean> {
    return this.tokenStorageService.currentUser$.pipe(
      map(user => {
        console.log("user: ", user)
        if (this.tokenStorageService.getToken(REFRESH_TOKEN_KEY) == null) {
          this.router.navigate(['/login']); // redirect to login page if there is no authenticated user
          return false;
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
