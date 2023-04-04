import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {
  CONTENT_TYPE_HEADER,
  FACEBOOK_LOGIN_API, FORGET_PASSWORD_API_URL, FORGET_PASSWORD_VERIFY_API_URL,
  GOOGLE_LOGIN_API_API,
  LOGIN_API_URL,
  REFRESH_TOKEN_API, RESET_PASSWORD_API_URL, VERIFY_ACCOUNT_API
} from "../../constants/constants";
import {Token} from "../../models/token.model";
import {ForgetPasswordRequest} from "../../models/forget-password.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    const body = {email, password};
    const headers = new HttpHeaders(CONTENT_TYPE_HEADER);

    return this.http.post<any>(LOGIN_API_URL, body, {headers});
  }

  googleLogin(googleToken: string): Observable<any> {
    const body = {value: googleToken};
    const headers = new HttpHeaders(CONTENT_TYPE_HEADER);
    return this.http.post<any>(GOOGLE_LOGIN_API_API, body, {headers});
  }


  isTokenExpired(token: Token | null): boolean {
    if (token) {
      const strTokenExpirationDate = token.expiresIn;

      const tokenExpirationDate: Date = new Date(strTokenExpirationDate);

      const currentTime = new Date();

      const isExpired = tokenExpirationDate <= currentTime;

      return isExpired;
    }
    console.log('token is null');
    return true;
  }


  refreshToken(refreshToken: string): Observable<any> {
    console.log("refreshing token .....")
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + refreshToken);
    console.log(headers)
    return this.http.post<any>(REFRESH_TOKEN_API, null, {headers: headers});
  }

  facebookLogin(facebookToken: String): Observable<any> {
    const body = {value: facebookToken};
    const headers = new HttpHeaders(CONTENT_TYPE_HEADER);
    return this.http.post<any>(FACEBOOK_LOGIN_API, body, {headers});
  }

  verifyAccount(code: string): Observable<any> {
    const params = new HttpParams().set('code', code);
    return this.http.get(VERIFY_ACCOUNT_API, { params });
  }

  forgetPassword(forgetPasswordRequest: ForgetPasswordRequest): Observable<any> {
    return this.http.post<any>(FORGET_PASSWORD_API_URL, forgetPasswordRequest);
  }

  verifyToken(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(FORGET_PASSWORD_VERIFY_API_URL, { headers });
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const body = { newPassword };

    return this.http.post<any>(RESET_PASSWORD_API_URL, body, { headers });
  }
  //add isLonggedIn() method
}
