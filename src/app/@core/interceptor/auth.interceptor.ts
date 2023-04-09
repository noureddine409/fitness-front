import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {TokenStorageService} from "../services/token-storage/token-storage.service";
import {REFRESH_TOKEN_KEY, TOKEN_KEY} from "../../@shared/constants";
import {AuthService} from "../services/authentication/auth.service";
import {Token} from "../models/token.model";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  accessToken!: Token| null

  refreshToken!: Token| null

  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

    if (request.url.includes('/api/auth/')) {
      return next.handle(request);
    }

    this.accessToken = this.tokenStorageService.getToken(TOKEN_KEY);
    this.refreshToken = this.tokenStorageService.getToken(REFRESH_TOKEN_KEY);
    console.log("access token exist", this.accessToken)
    console.log("refresh token exist",  this.refreshToken)
    const isAccessTokenExpires = this.authService.isTokenExpired(this.accessToken)
    if (this.accessToken && !isAccessTokenExpires) {
      request = this.addAuthorizationHeader(request, this.accessToken);
      return next.handle(request);
    }
    if (this.accessToken && isAccessTokenExpires){
      return this.authService.refreshToken(this.refreshToken?.token!).pipe(
        switchMap(value => {
          let access:Token = value.accessToken;
          let refresh: Token = value.refreshToken;
          console.log(access)
          this.tokenStorageService.saveToken(access);
          this.tokenStorageService.saveRefreshToken(refresh);
          const cloned = this.addAuthorizationHeader(request, access)
          console.log(value.accessToken)
          return next.handle(cloned);
        }),
        catchError(error => {
          this.tokenStorageService.signOut();
          this.router.navigate(['/login']);
          return throwError(error);
        })
      );
    }

    return next.handle(request);
  }

  private addAuthorizationHeader(request: HttpRequest<any>, token: Token): HttpRequest<any> {
    console.log(token.token)
    console.log(token.tokenType)
    return request.clone({
      setHeaders: {
        Authorization: `${token.tokenType} ${token.token}`
      }
    });
  }

}
