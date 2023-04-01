import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {Observable, switchMap, throwError} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {NgProgress} from 'ngx-progressbar';
import {TokenStorageService} from '../services/token-storage/token-storage.service';
import {REFRESH_TOKEN_KEY, TOKEN_KEY} from '../constants/constants';
import {AuthService} from '../services/authentication/auth.service';
import {Token} from '../models/token.model';
import {Router} from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  accessToken!: Token | null;
  refreshToken!: Token | null;

  constructor(
    private tokenStorageService: TokenStorageService,
    private authService: AuthService,
    private router: Router,
    private progress: NgProgress
  ) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.includes('/api/auth/')) {
      return next.handle(request);
    }

    this.accessToken = this.tokenStorageService.getToken(TOKEN_KEY);
    this.refreshToken = this.tokenStorageService.getToken(REFRESH_TOKEN_KEY);
    console.log('access token exist', this.accessToken);
    console.log('refresh token exist', this.refreshToken);
    const isAccessTokenExpires = this.authService.isTokenExpired(
      this.accessToken
    );
    if (this.accessToken && !isAccessTokenExpires) {
      request = this.addAuthorizationHeader(request, this.accessToken);
      return next.handle(request).pipe(
        catchError((error) => {
          this.handleError(error);
          return throwError(error);
        }),
        finalize(() => {
          (this.progress as any).complete();

        })
      );
    }
    if (this.accessToken && isAccessTokenExpires) {
      return this.authService.refreshToken(this.refreshToken?.token!).pipe(
        switchMap((value) => {
          let newAccessToken: Token = value.accessToken;
          let newRefreshToken: Token = value.refreshToken;
          console.log(newAccessToken);
          this.tokenStorageService.saveToken(newAccessToken);
          this.tokenStorageService.saveRefreshToken(newRefreshToken);
          const cloned = this.addAuthorizationHeader(request, newAccessToken);
          console.log(value.accessToken);
          return next.handle(cloned).pipe(
            catchError((error) => {
              this.handleError(error);
              return throwError(error);
            }),
            finalize(() => {
              (this.progress as any).complete();
            })
          );
        }),
        catchError((error) => {
          this.handleError(error);
          return throwError(error);
        })
      );
    }

    return next.handle(request).pipe(
      catchError((error) => {
        this.handleError(error);
        return throwError(error);
      }),
      finalize(() => {
        (this.progress as any).complete();
      })
    );
  }

  private addAuthorizationHeader(
    request: HttpRequest<any>,
    token: Token
  ): HttpRequest<any> {
    console.log(token.token);
    console.log(token.tokenType);
    return request.clone({
      setHeaders: {
        Authorization: `${token.tokenType} ${token.token}`,
      },
    });
  }

  private handleError(error: any) {
    (this.progress as any).complete();
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }
}

