import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  COMPLETE_ORDER_API_URL,
  CREATE_ORDER_API_URL,
  FIND_ENROLLMENT_API_URL, GET_NEW_ENROLLED_USERS,
  GET_NEW_USERS_ORDERS
} from "../../../@shared/constants";
import {Order, ProgramEnrollment} from "../../models/enrollment.model";
import {AppUser} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  enrolled(programId: number): Observable<ProgramEnrollment> {
    const url = FIND_ENROLLMENT_API_URL.replace("{id}", programId.toString())
    return this.http.get<ProgramEnrollment>(url);
  }

  createEnrollmentOrder(programId: number): Observable<Order> {
    const url = CREATE_ORDER_API_URL.replace("{id}", programId.toString());
    return this.http.post<Order>(url, {});
  }

  completeOrder(orderId: string): Observable<ProgramEnrollment> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = {orderId: orderId};
    return this.http.post<ProgramEnrollment>(COMPLETE_ORDER_API_URL, body, {headers: headers, params: {orderId: orderId}});

  }

  getNewOrders(page = 0, size = 5): Observable<HttpResponse<ProgramEnrollment[]>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<ProgramEnrollment[]>(GET_NEW_USERS_ORDERS, {params, observe: 'response'});
  }

  getEnrolledUser(page = 0, size = 5): Observable<HttpResponse<AppUser[]>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<AppUser[]>(GET_NEW_ENROLLED_USERS, {params, observe: 'response'});
  }
}
