import {Component, OnInit} from '@angular/core';
import {ProgramEnrollment} from "../../../@core/models/enrollment.model";
import {PaymentService} from "../../../@core/services/payment/payment.service";
import {AppUser} from "../../../@core/models/user.model";
import {ALERT_MESSAGES} from "../../../@shared/constants";
import {StatisticsDto} from "../../../@core/models/statistics.model";
import {StatisticsService} from "../../../@core/services/statistics/statistics.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit{

  orders : ProgramEnrollment[] = []

  newUsers: AppUser[] = [];

  alert!: { message: string; type: string } | null;

  statistics!: StatisticsDto;


  constructor(private enrollmentService: PaymentService, private statisticsService: StatisticsService) {
  }

  ngOnInit() {

    this.statisticsService.getTrainerStatistics().subscribe(
      value => {
        this.statistics = value;
      }
    )

    this.enrollmentService.getEnrolledUser().subscribe(
      value => {
        this.newUsers = value.body!;
      },
      () => {
        this.alert = {
          message: ALERT_MESSAGES.ERROR,
          type: "danger"
        }
      }
    )

    this.enrollmentService.getNewOrders().subscribe(
      value => {
        this.orders = value.body!
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
