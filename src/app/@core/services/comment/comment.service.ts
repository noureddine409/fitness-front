import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentDto, CommentReplyDto} from "../../models/program.model";
import {
  CREATE_COMMENT_API_URL,
  DELETE_COMMENT_API_URL,
  DELETE_REPLY_COMMENT_API_URL,
  REPLY_COMMENT_API_URL
} from "../../../@shared/constants";


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
  replyComment(commentId: number, reply: string): Observable<CommentReplyDto> {
    const url = REPLY_COMMENT_API_URL.replace("{id}", commentId.toString());
const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = { reply: reply };
    return this.http.post<CommentReplyDto>(url, body, {headers: headers, params: {reply: reply}});
  }
  deleteComment(commentId: number): Observable<boolean> {
    const url = DELETE_COMMENT_API_URL.replace("{id}", commentId.toString());
    return this.http.delete<boolean>(url);
  }
  deleteReplyComment(replyId: number): Observable<boolean> {
    const url = DELETE_REPLY_COMMENT_API_URL.replace("{replyId}", replyId.toString());
    return this.http.delete<boolean>(url);
  }
}
