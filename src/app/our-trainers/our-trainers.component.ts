import {Component, OnInit} from '@angular/core';
import {AppUser} from "../@core/models/user.model";
import {UserService} from "../@core/services/user-service/user.service";
import {SearchDto} from "../@core/models/search.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-our-trainers',
  templateUrl: './our-trainers.component.html',
  styleUrls: ['./our-trainers.component.css']
})
export class OurTrainersComponent implements OnInit{
  trainers: AppUser[] = [];

  searchKeyword= ""

  searchCriteria!: SearchDto

  totalPages!: number
  currentPage = 0;
  searchForm!: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {


  }

  ngOnInit() {

    this.searchForm = this.fb.group(
      {
        keyword: this.fb.control(''),
      }
    )

    this.loadData()

  }

  loadData() {
    this.searchCriteria = {
      keyword: this.searchKeyword,
      page: this.currentPage,
      size: 4
    }
    this.userService.searchTrainers(this.searchCriteria).subscribe(
      value => {
        this.trainers = value.body!
        let headers = value.headers;
        this.totalPages = Number(headers.get('X-Total-Pages')!);
      },
      error => {
        this.trainers = []
      }
    )
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

  search() {
    this.searchKeyword = this.searchForm.value.keyword;
    this.loadData()
  }
}
