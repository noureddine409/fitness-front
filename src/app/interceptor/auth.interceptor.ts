import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStorageService} from "../services/token-storage/token-storage.service";
import {REFRESH_TOKEN_KEY, TOKEN_KEY} from "../constants/constants";
import {AuthService} from "../services/authentication/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenStorageService.getToken(TOKEN_KEY);
    if (token) {
      let strToken = token?.tokenType + " " + token?.token;
      const cloned = request.clone({
        headers: request.headers.set("Authorization", strToken)
      });
      return next.handle(cloned);
    }
    return next.handle(request);
  }
  refreshToken(): void {
    const accessToken= this.tokenStorageService.getToken(TOKEN_KEY);
    const refreshToken= this.tokenStorageService.getToken(REFRESH_TOKEN_KEY);
    if (this.authService.isTokenExpired(accessToken)) {
      let refreshTokenExist = refreshToken?.token!;
      this.authService.refreshToken(refreshTokenExist).subscribe(data =>{
          this.tokenStorageService.saveToken(data.accessToken);
          this.tokenStorageService.saveRefreshToken(data.refreshToken);

      },
    (error: any) => {
          console.error('Error refreshing token:', error);
        }
      )
  }
}
}
