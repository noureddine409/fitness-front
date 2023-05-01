import {Injectable} from "@angular/core";
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {JoinDto, JoinTreatDto} from "../../models/join.model";
import {GET_ALL_JOIN_REQUESTS, REQUEST_JOIN_API_URL, TREAT_JOIN_REQUEST_API_URL} from "../../../@shared/constants";

@Injectable({
  providedIn: 'root'
})
export class JoinService {
  constructor(private http: HttpClient) {
  }

  becomeTrainer(join: any, documents: any[]): Observable<JoinDto> {
    const formData = new FormData();
    formData.append('join', join);
    for (let i = 0; i < documents.length; i++) {
      formData.append('documents', documents[i]);
    }
    return this.http.post<JoinDto>(REQUEST_JOIN_API_URL, formData);
  }

  findAllRequests(page: number = 0, size: number = 3): Observable<HttpResponse<JoinDto[]>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<JoinDto[]>(GET_ALL_JOIN_REQUESTS, {params, observe: 'response'});
  }

  treatRequest(id: number, joinTreat: JoinTreatDto): Observable<JoinDto> {
    const url = TREAT_JOIN_REQUEST_API_URL.replace('{id_request}', id.toString());
    return this.http.patch<JoinDto>(url, joinTreat);
  }
}
