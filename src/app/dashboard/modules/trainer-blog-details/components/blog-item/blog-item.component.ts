import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BlogDto} from "../../../../../@core/models/blog.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent {
  constructor(private router: Router) {
  }
  @Input()
  blog!: BlogDto;
  @Output() blogItemClick = new EventEmitter<number>();
  accessBlog(id: number) {
    this.blogItemClick.emit(id);
  }
  handleBlogClick(id: number) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/dashboard/blog-details/' + id]);
  }

}
