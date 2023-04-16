import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SAVE_PROGRAM_API_URL} from "../../../@shared/constants";
import {ProgramDto} from "../../models/program.model";

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  programArray: ProgramDto[] = [];
  pictureArray: File[] = [];

  constructor(private http: HttpClient) { }
  setProgramDto(programDto: ProgramDto,programPicture: File) {
    this.programArray.push(programDto);
    this.pictureArray.push(programPicture);
  }

  getAllProgramDto(): ProgramDto[] {
    return this.programArray;
  }
  getAllProgramPicture(): File[] {
    return this.pictureArray;
  }
  popProgramDto(): ProgramDto {
    return this.programArray.pop()!;
  }
  popProgramPicture(): File {
    return this.pictureArray.pop()!;
  }
  getProgramDto(programDto: ProgramDto): ProgramDto {
    return this.programArray.find(p => p === programDto)!;
  }
  getProgramPicture(programPicture: File): File {
    return this.pictureArray.find(p => p === programPicture)!;
  }
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
