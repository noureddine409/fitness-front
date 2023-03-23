import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environements/environements";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginApiUrl = environment.apiUrl + '/api/auth/login';
  private googleLoginApiUrl = environment.apiUrl + '/api/auth/google-social-login';
  private refreshApiUrl = environment.apiUrl + '/api/auth/token';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.loginApiUrl, body, { headers });
  }

  googleLogin(googleToken: string) : Observable<any> {
    const body = { value: googleToken };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.googleLoginApiUrl, body, { headers });
  }



  refreshToken(refreshToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${refreshToken}`
    });

    return this.http.post<any>(this.refreshApiUrl, null, { headers });
  }

}
