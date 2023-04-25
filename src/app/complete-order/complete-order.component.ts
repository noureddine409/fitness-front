import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PaymentService} from "../@core/services/payment/payment.service";

@Component({
  selector: 'app-complete-order',
  templateUrl: './complete-order.component.html',
  styleUrls: ['./complete-order.component.css']
})
export class CompleteOrderComponent implements OnInit{

  constructor(private route: ActivatedRoute, private paymentService: PaymentService, private router: Router) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const PayerID = params['token'];
      if (PayerID) {
        this.paymentService.completeOrder(PayerID).subscribe(
          value => {
            this.router.navigate(["/program-details/"+value.program.id]);
          },
          error => {
            this.router.navigate(["/error-404"]);
          }
        )
      }
    });
  }

}
