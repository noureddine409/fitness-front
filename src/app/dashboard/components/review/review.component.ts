import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ReviewService} from "../../../@core/services/review-service/review.service";
import {Router} from "@angular/router";
import {ReviewDto} from "../../../@core/models/review.model";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  @Input()
  review!: ReviewDto;
  @Output() reviewClick = new EventEmitter<number>();
  constructor(private reviewService: ReviewService, private router: Router) {
  }
  accessReview(id: number) {
    this.reviewClick.emit(id);
  }

  deleteReview() {
    this.reviewService.deleteReview(this.review.id!).subscribe(
      (response) => {
        //this.router.navigate(['/dashboard/reviews']);
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
