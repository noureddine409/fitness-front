import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StatisticsDto} from "../../models/statistics.model";
import {GET_ADMIN_STATISTICS, GET_TRAINER_STATISTICS} from "../../../@shared/constants";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

  getTrainerStatistics() {
    return this.http.get<StatisticsDto>(GET_TRAINER_STATISTICS);
  }

  getAdminStatistics() {
    return this.http.get<StatisticsDto>(GET_ADMIN_STATISTICS);
  }


}
