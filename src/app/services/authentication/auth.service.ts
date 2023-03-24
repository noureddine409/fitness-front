import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  CONTENT_TYPE_HEADER,
  FACEBOOK_LOGIN_API,
  GOOGLE_LOGIN_API_API,
  LOGIN_API_URL,
  REFRESH_TOKEN_API
} from "../../constants/constants";
import {Token} from "../../models/token.model";

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


  refreshToken(refreshToken: Token): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `${refreshToken.tokenType} ${refreshToken.token}`
    });

    return this.http.post<any>(REFRESH_TOKEN_API, null, {headers});
  }

  facebookLogin(facebookToken: String): Observable<any> {
    const body = {value: facebookToken};
    const headers = new HttpHeaders(CONTENT_TYPE_HEADER);
    return this.http.post<any>(FACEBOOK_LOGIN_API, body, {headers});
  }
}
