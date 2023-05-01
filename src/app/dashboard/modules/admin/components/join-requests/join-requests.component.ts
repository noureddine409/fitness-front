import {Component, OnInit} from '@angular/core';
import {ReviewDto} from "../../../../../@core/models/review.model";
import {SearchDto} from "../../../../../@core/models/search.model";
import {ReviewService} from "../../../../../@core/services/review-service/review.service";
import {Router} from "@angular/router";
import {JoinDto} from "../../../../../@core/models/join.model";
import {JoinService} from "../../../../../@core/services/join/join.service";

@Component({
  selector: 'app-join-requests',
  templateUrl: './join-requests.component.html',
  styleUrls: ['./join-requests.component.css']
})
export class JoinRequestsComponent implements OnInit{
  requests: JoinDto[] = [];
  currentPage: number = 0;
  totalPages: number = 3;
  constructor(private requestService: JoinService, private router: Router ) {
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.requestService.findAllRequests(this.currentPage).subscribe(response => {
      this.requests = response.body!;
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

  handleRequestClick(id: number) {
    this.router.navigate(['/dashboard/program-details/' + id]);
  }

}
