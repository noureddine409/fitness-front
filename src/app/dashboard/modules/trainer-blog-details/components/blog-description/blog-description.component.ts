import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BlogDto} from "../../../../../@core/models/blog.model";

@Component({
  selector: 'app-blog-description',
  templateUrl: './blog-description.component.html',
  styleUrls: ['./blog-description.component.css']
})
export class BlogDescriptionComponent {
  @Input()
  blog! : BlogDto;
  @Output() blogDateClick = new EventEmitter<number>();

  splitDescription(description: string): string[] {
    const maxLength = 200;
    const sentences = description.match(/[^.!?]+[.!?]+/g) || [description];
    const result = [];
    let currentString = '';
    for (const sentence of sentences) {
      if (currentString.length + sentence.length <= maxLength) {
        currentString += sentence;
      } else {
        result.push(currentString);
        currentString = sentence;
      }
    }
    if (currentString) {
      result.push(currentString);
    }
    return result;
  }

}
