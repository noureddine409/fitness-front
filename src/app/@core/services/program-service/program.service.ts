import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FIND_PROGRAM_BY_ID_API_URL, SAVE_PROGRAM_API_URL} from "../../../@shared/constants";
import {ProgramDto} from "../../models/program.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }




  save(program: any, videos: any[], pictures: any[], programPicture: any): Observable<ProgramDto> {
    const formData = new FormData();
    formData.append('program', program);
    for (let i = 0; i < videos.length; i++) {
      formData.append('section-videos', videos[i]);
    }
    for (let i = 0; i < pictures.length; i++) {
      formData.append('section-pictures', pictures[i]);
    }
    formData.append('program-picture', programPicture);


    return this.http.post<ProgramDto>(SAVE_PROGRAM_API_URL, formData);
  }

  findById(programId: number) : Observable<ProgramDto>{

    return this.http.get<ProgramDto>( FIND_PROGRAM_BY_ID_API_URL + programId);


  }
}
