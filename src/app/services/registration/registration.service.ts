import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environements/environements";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  register(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/api/auth/register`, { email, password });
  }
}
