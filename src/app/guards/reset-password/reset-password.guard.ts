import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from "../../services/token-storage/token-storage.service";
import {RESET_TOKEN_KEY} from "../../constants/constants";
import {AuthService} from "../../services/authentication/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordGuard implements CanActivate {

  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService, private router: Router) {
  }
  canActivate(){
    const resetToken = this.tokenStorageService.getToken(RESET_TOKEN_KEY);
    if(!resetToken || this.authService.isTokenExpired(resetToken)) {
      this.router.navigate(['/error-404'])
      return false;
    }
    return true;
  }

}
