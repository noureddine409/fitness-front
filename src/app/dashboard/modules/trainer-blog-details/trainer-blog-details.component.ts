import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BlogDto} from "../../../@core/models/blog.model";
import {BlogService} from "../../../@core/services/blog-service/blog.service";

@Component({
  selector: 'app-trainer-blog-details',
  templateUrl: './trainer-blog-details.component.html',
  styleUrls: ['./trainer-blog-details.component.css']
})
export class TrainerBlogDetailsComponent {
  blogDto!: BlogDto;
  Blogs: BlogDto[] = [];
  blogId!: number;

  constructor(private router: Router, private blogService: BlogService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.paramMap.get("id")
    if (param == null) {
      this.router.navigate(['/error-404']);
      return
    }
    this.blogId = parseInt(param, 10);
    this.blogService.findById(this.blogId).subscribe(
      data => {
        this.blogDto = data;
      },
      () => {
        this.router.navigate(["/error-404"]);
      }
    )
    this.loadData();
  }

  loadData() {
    this.blogService.findTrainerBlogs().subscribe(response => {
      this.Blogs = response.body!;
    })
  }

  handleBlogClick(id: number) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/dashboard/blog-details/' + id]);
  }
  goToOtherComponent(url:string) {
    this.router.navigate([url]);
  }


  handleDescClick($event: number) {

  }
}
