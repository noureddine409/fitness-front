import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BlogDto} from "../../../../../@core/models/blog.model";

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent {
  @Input()
  blog!: BlogDto;
  @Output() blogItemClick = new EventEmitter<number>();
  accessBlog(id: number) {
    this.blogItemClick.emit(id);
  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day} ${year}`;
  }

}
