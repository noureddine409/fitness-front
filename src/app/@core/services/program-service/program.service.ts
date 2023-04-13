import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {ProgramDto} from "../../models/program.model";
import {SAVE_PROGRAM_API_URL} from "../../../@shared/constants";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }

  save(programDto: ProgramDto, multipartFiles: File[]): Observable<ProgramDto> {
    const formData = new FormData();
    formData.append('program', JSON.stringify(programDto));
    for (const file of multipartFiles) {
      formData.append('files', file);
    }
    return this.http.post<ProgramDto>(SAVE_PROGRAM_API_URL, formData).pipe(
      map(response => response as ProgramDto),
      tap(response => console.log(response)),
      catchError(error => {
        console.error(error);
        throw error;
      })
    );
  }
}
