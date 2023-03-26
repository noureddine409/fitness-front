import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {GET_CURRENT_USER_API_URL} from "../../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getCurrentUser(): Observable<any> {

    return this.http.get<any>(GET_CURRENT_USER_API_URL);
  }
}
