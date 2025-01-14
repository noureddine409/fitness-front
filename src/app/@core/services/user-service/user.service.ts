import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  GET_CURRENT_USER_API_URL, GET_USER_BY_ID_API_URL,
  RESET_PASSWORD_URL,
  SEARCH_TRAINER_API_URL,
  UPDATE_PROFILE_PICTURE_API_URL,
  UPDATE_USER_API_URL
} from "../../../@shared/constants";
import {AppUser, UserPatch} from "../../models/user.model";
import {SearchDto} from "../../models/search.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }




  getCurrentUser(): Observable<any> {
    return this.http.get<any>(GET_CURRENT_USER_API_URL);
  }

  findByUser(id: number): Observable<any> {
    const url = GET_USER_BY_ID_API_URL.replace("{id}", id.toString());
    return this.http.get<any>(url);
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

  searchTrainers(searchDto: SearchDto): Observable<HttpResponse<AppUser[]>> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this.http.post<AppUser[]>(SEARCH_TRAINER_API_URL, searchDto, { headers, observe: 'response' });
  }

}
