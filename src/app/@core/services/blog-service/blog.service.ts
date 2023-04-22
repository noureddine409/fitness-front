import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  BLOG_CANCEL_API_URL,
  BLOG_DELETE_API_URL,
  BLOG_SUBMIT_API_URL,
  FIND_BLOG_BY_ID_API_URL,
  GET_TRAINER_BLOGS_API_URL, SAVE_BLOG_API_URL, UPDATE_BLOG_API_URL
} from "../../../@shared/constants";
import {BlogDto, BlogPatchDto} from "../../models/blog.model";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {
  }


  save(blog: any, blogPicture: any): Observable<BlogDto> {
    const formData = new FormData();
    formData.append('blog', blog);
    formData.append('blog-picture', blogPicture);
    return this.http.post<BlogDto>(SAVE_BLOG_API_URL, formData);
  }
  update(id: number, blogPatchDto: BlogPatchDto): Observable<BlogDto>{
    const formData = new FormData();
    formData.append('blogPatchDto', JSON.stringify(blogPatchDto));
    const url = UPDATE_BLOG_API_URL.replace('{id}', id.toString());
    return this.http.patch<BlogDto>(url, blogPatchDto);
  }

  findById(blogId: number): Observable<BlogDto> {

    return this.http.get<BlogDto>(FIND_BLOG_BY_ID_API_URL + blogId);


  }

  findTrainerBlogs(page: number = 0, size: number = 3): Observable<HttpResponse<BlogDto[]>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<BlogDto[]>(GET_TRAINER_BLOGS_API_URL, {params, observe: 'response'});
  }

  submitBlog(id: number): Observable<BlogDto> {
    const url = BLOG_SUBMIT_API_URL.replace('{id}', id.toString());
    return this.http.patch<BlogDto>(url, {});
  }

  cancelBlogSubmission(id: number): Observable<BlogDto> {
    const url = BLOG_CANCEL_API_URL.replace('{id}', id.toString());
    return this.http.patch<BlogDto>(url, {});
  }

  deleteBlog(id: number): Observable<boolean> {
    const url = BLOG_DELETE_API_URL.replace('{id}', id.toString());
    return this.http.delete<boolean>(url)
  }


}
