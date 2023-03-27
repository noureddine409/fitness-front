import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {TokenStorageService} from "../../services/token-storage/token-storage.service";
import {AppUser} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class CompleteProfileGuard implements CanActivate {

  constructor(private tokenStorageService: TokenStorageService, private router: Router) {


  }

  canActivate(): boolean {
    let canActivate = false; // Set a default value

    this.tokenStorageService.currentUser$.subscribe((user: AppUser | null) => {
      if (!user) {
        // Redirect the user to the login page if they are not logged in
        this.router.navigate(['/login']);
      } else if (!user.profileCompleted) {
        // Allow the user to access the CompleteProfileComponent
        canActivate = true;
      } else {
        // Redirect the user to the home page if they have not completed their profile
        this.router.navigate(['/home']);
      }
    });

    return canActivate; // Return the final value
  }


}
