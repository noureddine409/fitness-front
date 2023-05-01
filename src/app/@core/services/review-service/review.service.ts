import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {ReviewDto, ReviewPatchDto} from "../../models/review.model";
import {
  CREATE_REVIEW_API_URL,
  GET_REVIEWS_API_URL,
  SEARCH_REVIEW_API_URL,
  UPDATE_REVIEW_API_URL
} from "../../../@shared/constants";
import {Observable} from "rxjs";
import {SearchDto} from "../../models/search.model";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

    constructor(private http: HttpClient) {
    }
    saveReview(programId:number,review:ReviewDto):Observable<ReviewDto>{
      const url = CREATE_REVIEW_API_URL.replace("{id}", programId.toString());
      return this.http.post<ReviewDto>(url,review);
    }
    getReview(reviewId:number):Observable<ReviewDto>{
      const url=GET_REVIEWS_API_URL.replace("{id}",reviewId.toString());
      return this.http.get<ReviewDto>(url);
    }
    updateReview(reviewId:number,reviewPatchDto:ReviewPatchDto):Observable<ReviewDto>{
      const url=UPDATE_REVIEW_API_URL.replace("{id}",reviewId.toString());
      return this.http.patch<ReviewDto>(url,reviewPatchDto);
    }
    searchReview(searchDto:SearchDto):Observable<HttpResponse<ReviewDto[]>>{
      return this.http.post<ReviewDto[]>(SEARCH_REVIEW_API_URL,searchDto,{observe:'response'});
    }
}
