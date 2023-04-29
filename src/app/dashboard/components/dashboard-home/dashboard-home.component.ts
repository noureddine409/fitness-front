import {Component, OnInit} from '@angular/core';
import {ProgramEnrollment} from "../../../@core/models/enrollment.model";
import {PaymentService} from "../../../@core/services/payment/payment.service";
import {AppUser} from "../../../@core/models/user.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit{

  orders : ProgramEnrollment[] = []

  newUsers: AppUser[] = [];

  constructor(private enrollmentService: PaymentService) {
  }

  ngOnInit() {

    this.enrollmentService.getEnrolledUser().subscribe(
      value => {
        this.newUsers = value.body!;
      }
    )

    this.enrollmentService.getNewOrders().subscribe(
      value => {
        this.orders = value.body!
      }
    )
  }
}
