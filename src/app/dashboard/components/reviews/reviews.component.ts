import {Component, OnInit} from '@angular/core';
import {ReviewService} from "../../../@core/services/review-service/review.service";
import {Router} from "@angular/router";
import {ReviewDto} from "../../../@core/models/review.model";
import {SearchDto} from "../../../@core/models/search.model";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit{
  reviews: ReviewDto[] = [];
  currentPage: number = 0;
  totalPages: number = 3;
  searchKeyword= "";
  searchCriteria!: SearchDto
  constructor(private reviewService: ReviewService, private router: Router ) {
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.searchCriteria = {
      keyword: this.searchKeyword,
      page: this.currentPage,
      size: 9
    }
    this.reviewService.searchReview(this.searchCriteria).subscribe(response => {
      this.reviews = response.body!;
      let headers = response.headers;
      this.totalPages = Number(headers.get('X-Total-Pages')!);
    })
  }


  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadData();
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadData();
    }
  }

  generatePageRange() {
    const pageRange = [];
    const start = Math.max(0, this.currentPage - 2);
    const end = Math.min(this.totalPages - 1, this.currentPage + 2);
    for (let i = start; i <= end; i++) {
      pageRange.push(i);
    }
    return pageRange;
  }

  handleReviewClick(id: number) {
    this.router.navigate(['/dashboard/program-details/' + id]);
  }

}
