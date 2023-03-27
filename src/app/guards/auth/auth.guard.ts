import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {TokenStorageService} from "../../services/token-storage/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenStorageService: TokenStorageService, private router: Router) {
  }

  canActivate(): Observable<boolean> | boolean {
    return this.tokenStorageService.currentUser$.pipe(
      map(user => {
        if (user) {
          // If the user is logged in, redirect them to the home page
          this.router.navigate(['/home']);
          return false;
        } else {
          // If the user is not logged in, allow them to access the route
          return true;
        }
      })
    );
  }

}
