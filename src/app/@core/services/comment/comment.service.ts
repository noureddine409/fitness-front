import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentDto} from "../../models/program.model";
import {CREATE_COMMENT_API_URL} from "../../../@shared/constants";


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {}

  addComment(sectionId: number, comment: string): Observable<CommentDto> {
    const url = CREATE_COMMENT_API_URL.replace("{id}", sectionId.toString());
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = { comment: comment };

    return this.http.post<CommentDto>(url, body, {headers: headers, params: {comment: comment}});
  }

}
