import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from "../services/token-storage/token-storage.service";
import {TOKEN_KEY} from "../constants/constants";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenStorageService: TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenStorageService.getToken(TOKEN_KEY);
    if(token) {
      let strToken = token?.tokenType + " " + token?.token;
      const cloned = request.clone({
        headers: request.headers.set("Authorization", strToken)
      });
      return next.handle(cloned);
    }
    return next.handle(request);
  }
}
