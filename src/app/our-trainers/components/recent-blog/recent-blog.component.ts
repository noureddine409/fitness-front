import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BlogDto} from "../../../@core/models/blog.model";

@Component({
  selector: 'app-recent-blog',
  templateUrl: './recent-blog.component.html',
  styleUrls: ['./recent-blog.component.css']
})
export class RecentBlogComponent {
  @Input()
  blog!: BlogDto;
  @Output() blogItemClick = new EventEmitter<number>();
  accessBlog(id: number) {
    this.blogItemClick.emit(id);
  }

}
