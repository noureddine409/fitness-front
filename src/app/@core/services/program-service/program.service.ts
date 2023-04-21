import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpParams, HttpRequest, HttpResponse} from "@angular/common/http";
import {
  FIND_PROGRAM_BY_ID_API_URL,
  GET_TRAINER_PROGRAMS_API_URL, PROGRAM_CANCEL_API_URL, PROGRAM_DELETE_API_URL, PROGRAM_SUBMIT_API_URL,
  SAVE_PROGRAM_API_URL
} from "../../../@shared/constants";
import {ProgramDto} from "../../models/program.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }




  save(program: any, videos: any[], pictures: any[], programPicture: any): Observable<HttpEvent<ProgramDto>> {
    const formData = new FormData();
    formData.append('program', program);
    for (let i = 0; i < videos.length; i++) {
      formData.append('section-videos', videos[i]);
    }
    for (let i = 0; i < pictures.length; i++) {
      formData.append('section-pictures', pictures[i]);
    }
    formData.append('program-picture', programPicture);

    const req = new HttpRequest('POST', SAVE_PROGRAM_API_URL, formData);

    return this.http.request<ProgramDto>(req);
  }

  findById(programId: number) : Observable<ProgramDto>{

    return this.http.get<ProgramDto>( FIND_PROGRAM_BY_ID_API_URL + programId);


  }

  findTrainerPrograms(page: number = 0, size: number = 3): Observable<HttpResponse<ProgramDto[]>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<ProgramDto[]>(GET_TRAINER_PROGRAMS_API_URL, { params, observe: 'response' });
  }

  submitProgram(id: number): Observable<ProgramDto> {
    const url = PROGRAM_SUBMIT_API_URL.replace('{id}', id.toString());
    return this.http.patch<ProgramDto>(url, {});
  }

  cancelProgramSubmission(id: number): Observable<ProgramDto> {
    const url = PROGRAM_CANCEL_API_URL.replace('{id}', id.toString());
    return this.http.patch<ProgramDto>(url, {});
  }

  deleteProgram(id: number): Observable<boolean> {
    const url = PROGRAM_DELETE_API_URL.replace('{id}', id.toString());
    return this.http.delete<boolean>(url)
  }



}
