import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  GET_CURRENT_USER_API_URL,
  RESET_PASSWORD_URL,
  UPDATE_PROFILE_PICTURE_API_URL,
  UPDATE_USER_API_URL
} from "../../constants/constants";
import {UserPatch} from "../../models/user.model";

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

  public changeProfilePicture(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('profile-picture', file);

    return this.http.patch(UPDATE_PROFILE_PICTURE_API_URL, formData, {reportProgress: true});
  }

  resetPassword(oldPassword: string, newPassword: string): Observable<any> {
    const body = {oldPassword, newPassword };
    return this.http.patch<any>(RESET_PASSWORD_URL, body);
  }
}
