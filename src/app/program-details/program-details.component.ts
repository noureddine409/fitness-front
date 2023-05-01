import {Component, OnInit} from '@angular/core';
import {ProgramDto} from "../@core/models/program.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProgramService} from "../@core/services/program-service/program.service";
import {categories, equipments} from "../@shared/constants";
import {PaymentService} from "../@core/services/payment/payment.service";
import {ProgramEnrollment} from "../@core/models/enrollment.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReviewService} from "../@core/services/review-service/review.service";
import {ReviewDto} from "../@core/models/review.model";

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.css']
})
export class ProgramDetailsComponent implements OnInit{

  programDto!: ProgramDto;
  programId!: number;
  reviewForm!: FormGroup;
  submitted!: boolean;
  review! : ReviewDto;

  enrollment!: ProgramEnrollment | null;

  programAccess = false;
  loading!: boolean;
  selectedStars = 0;

  setRating(rating: number) {
    this.selectedStars = rating;
    console.log(rating);
  }

  constructor(private paymentService: PaymentService,
              private router: Router,
              private programService: ProgramService,
              private activatedRoute: ActivatedRoute,
              private readonly fb: FormBuilder,
              private reviewService: ReviewService) {
  }

  getValuesFromMapOptions(keys: string[]): string {
    return keys.map(key => categories.get(key)).join(' | ');
  }
  getValueFromMapCategories(key: string): string {
    return categories.get(key) || '';
  }

  getValuesFromMapEquipments(keys: string[]): string {
    return keys.map(key => equipments.get(key)).join(' | ');
  }

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.paramMap.get("id")

    if(param ==null) {
      this.router.navigate(['/error-404']);
      return
    }
    this.programId = parseInt(param , 10);
    this.programService.findById(this.programId).subscribe(
      data => {
        this.programDto = data;
      },
      () => {
        this.router.navigate(["/error-404"]);
      }
    )
    this.reviewForm=this.fb.group({
      'review': ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]],
    });

    this.paymentService.enrolled(this.programId).subscribe(
      value => {
        this.enrollment = value;
        this.programAccess = true
      },
      error => {
        this.enrollment = null;
        this.programAccess = false
      }
    )
  }

  enroll() {
    this.loading = true;
    this.paymentService.createEnrollmentOrder(this.programId).subscribe(
      value => {
        this.loading = false;
        window.location.href = value.redirectUrl;
      },
      error => {
        this.loading = false;
        this.router.navigate(["/error-404"]);
      }
    )
  }

  watchProgram() {
    this.router.navigate([`/watch-program/${(this.programId)}`]);

  }


  saveReview() {
    this.submitted = true;
    if(this.reviewForm.invalid) {
      return
    }
    const review = this.reviewForm.get('review')!.value;
    this.review = {
      review: review,
      rating: this.selectedStars
    }
    this.reviewService.saveReview(this.programDto.id!, this.review).subscribe(
      value => {
        this.router.navigate(["/our-programs"]);
      });
    this.reviewForm.reset();
  }
}
