import {Component, OnInit} from '@angular/core';
import {ProgramEnrollment} from "../../../@core/models/enrollment.model";
import {PaymentService} from "../../../@core/services/payment/payment.service";
import {AppUser} from "../../../@core/models/user.model";
import {ALERT_MESSAGES} from "../../../@shared/constants";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit{

  orders : ProgramEnrollment[] = []

  newUsers: AppUser[] = [];

  alert!: { message: string; type: string } | null;


  constructor(private enrollmentService: PaymentService) {
  }

  ngOnInit() {

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
}
