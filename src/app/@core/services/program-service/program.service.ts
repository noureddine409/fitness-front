import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SAVE_PROGRAM_API_URL} from "../../../@shared/constants";

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }

  save(program: any, videos: any[], pictures: any[], programPicture: any) {
    const formData = new FormData();
    formData.append('program', program);
    for (let i = 0; i < videos.length; i++) {
      formData.append('section-videos', videos[i]);
    }
    for (let i = 0; i < pictures.length; i++) {
      formData.append('section-pictures', pictures[i]);
    }
    formData.append('program-picture', programPicture);


    return this.http.post(SAVE_PROGRAM_API_URL, formData);
  }
}
