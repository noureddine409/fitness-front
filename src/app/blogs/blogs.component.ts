import {Component, OnInit} from '@angular/core';
import {BlogService} from "../@core/services/blog-service/blog.service";
import {BlogDto} from "../@core/models/blog.model";
import {SearchDto} from "../@core/models/search.model";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit{

  blogs: BlogDto[] = []

  searchDto: SearchDto = {
    keyword: "",
    size: 6,
    page: 0
  }

  totalPages: number = 0
  currentPage = 0;

  constructor(private blogService: BlogService) {


  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.searchDto.page = this.currentPage
    this.blogService.search(this.searchDto).subscribe(
      value => {
        this.blogs = value.body!
        let headers = value.headers;
        this.totalPages = Number(headers.get('X-Total-Pages')!);
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


}
