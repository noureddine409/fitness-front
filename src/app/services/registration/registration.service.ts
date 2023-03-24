import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {REGISTER_API_URL} from "../../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  register(email: string, password: string) {
    return this.http.post(REGISTER_API_URL, { email, password });
  }
}
