import {Component, Input} from '@angular/core';
import {BlogDto} from "../../../@core/models/blog.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {

  constructor(private router: Router) {
  }

  @Input()
  blog!: BlogDto

  goToOtherComponent(url:string) {
    this.router.navigate([url]);
  }


}
