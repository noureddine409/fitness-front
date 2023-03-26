import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {GET_CURRENT_USER_API_URL, UPDATE_USER_API_URL} from "../../constants/constants";
import {AppUser, UserPatch} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }




  getCurrentUser(): Observable<any> {
    return this.http.get<any>(GET_CURRENT_USER_API_URL);
  }

  updateUser(userPatch: UserPatch): Observable<any> {
    return this.http.patch<any>(UPDATE_USER_API_URL, userPatch);
  }
}
