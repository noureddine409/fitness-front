import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BlogDto} from "../../../../../@core/models/blog.model";

@Component({
  selector: 'app-blog-date',
  templateUrl: './blog-date.component.html',
  styleUrls: ['./blog-date.component.css']
})
export class BlogDateComponent {
  @Input()
  blog! : BlogDto;
  @Output() blogDateClick = new EventEmitter<number>();
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day} ${year}`;
  }
  accessBlog(id: number) {
    this.blogDateClick.emit(id);
  }

}
