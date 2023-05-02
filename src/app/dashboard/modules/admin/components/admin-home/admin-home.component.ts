import {Component, OnInit} from '@angular/core';
import {StatisticsDto} from "../../../../../@core/models/statistics.model";
import {StatisticsService} from "../../../../../@core/services/statistics/statistics.service";
import {AppUser} from "../../../../../@core/models/user.model";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{

  statistics!: StatisticsDto
  newUsers: AppUser[] = [];

  constructor(private statisticsService: StatisticsService) {
  }
  ngOnInit() {

    this.statisticsService.getAdminStatistics().subscribe(
      value => {
        this.statistics = value;
      }
    )
  }

  formatNumber(num: number): string {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1);
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1);
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1);
    } else {
      return num.toString();
    }
  }

  getSuffix(num: number): string {
    if (num >= 1000000000) {
      return 'B';
    } else if (num >= 1000000) {
      return 'M';
    } else if (num >= 1000) {
      return 'K';
    } else {
      return '';
    }
  }

}
