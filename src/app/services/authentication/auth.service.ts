import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environements/environements";
import {Token} from "../../models/token.model";
import {catchError, Observable, throwError} from "rxjs";
import jwt_decode from "jwt-decode";
import {LoginResponse} from "../../models/login.response.model";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginApiUrl = environment.apiUrl + '/api/auth/login';
  private refreshApiUrl = environment.apiUrl + '/api/auth/token';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.loginApiUrl, body, { headers });
  }



  refreshToken(refreshToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${refreshToken}`
    });

    return this.http.post<any>(this.refreshApiUrl, null, { headers });
  }

}
