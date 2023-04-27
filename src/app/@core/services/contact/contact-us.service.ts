import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CONTACT_US_API_URL} from "../../../@shared/constants";
import {ContactUsDto} from "../../models/contact.model";

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  constructor(private http: HttpClient) { }

  sendContactUs(dto: ContactUsDto): Observable<any> {
    return this.http.post<any>(CONTACT_US_API_URL, dto);
  }
}
