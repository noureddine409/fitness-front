import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BlogService} from "../../../../../@core/services/blog-service/blog.service";
import {BlogDto} from "../../../../../@core/models/blog.model";
import {blogStateConfigMap} from "../../../../../@shared/constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {

  constructor(private blogService: BlogService, private router: Router) {
  }


  @Input()
  blog!: BlogDto;

  @Output() blogClick = new EventEmitter<number>();

  @Output() blogDelete = new EventEmitter<number>();

  @Output() blogCancel = new EventEmitter<number>();
  blogStateConfig = blogStateConfigMap;

  accessBlog(id: number) {
    this.blogClick.emit(id);
  }


  submitBlog() {
    this.blogService.submitBlog(this.blog.id!).subscribe(
      value => {
        this.blog = value;
      }
    )
  }

  deleteBlog() {
    this.blogDelete.emit(this.blog.id)
  }

  cancelBlog() {
    this.blogService.cancelBlogSubmission(this.blog.id!).subscribe(
      value => {
        this.blog = value;
      }
    )

  }

  modifyBlog() {
    this.router.navigate([`/dashboard/modify-Blog/${this.blog.id}`]);
  }
}
