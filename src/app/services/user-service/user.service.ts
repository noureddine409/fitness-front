import {Injectable} from '@angular/core';
import {TOKEN_KEY} from "../../constants/constants";
import {TokenStorageService} from "../token-storage/token-storage.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environements/environements";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private tokenStorageService: TokenStorageService, private http: HttpClient) {
  }

  getCurrentUser(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get<any>(environment.apiUrl + "/api/users/me", {headers});
  }
}
