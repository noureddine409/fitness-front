import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {BlogDto} from "../../../@core/models/blog.model";
import {BlogService} from "../../../@core/services/blog-service/blog.service";

@Component({
  selector: 'app-blogs',
  templateUrl: './trainer-blogs.component.html',
  styleUrls: ['./trainer-blogs.component.css']
})
export class TrainerBlogsComponent {

  Blogs: BlogDto[] = [];

  currentPage: number = 0;
  totalPages: number = 3;

  constructor(private router: Router, private blogService: BlogService) {
  }

  goToOtherComponent(url: string) {
    this.router.navigate([url]);
  }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.blogService.findTrainerBlogs(this.currentPage).subscribe(response => {
      this.Blogs = response.body!;
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

  handleBlogClick(id: number) {
    this.router.navigate(['/dashboard/blog-details/' + id]);
  }

  onBlogDelete(id: number) {
    this.blogService.deleteBlog(id).subscribe(
      value => {
        this.Blogs = this.Blogs.filter((blog) => blog.id !== id);
      },
      error => {
        alert("cannot delete this blog");
      }
    )
  }

  onBlogCancel(id: number) {

  }
}
