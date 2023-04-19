import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {equipments, options} from "../../../@shared/constants";
import {BlogDto} from "../../../@core/models/blog.model";
import {BlogService} from "../../../@core/services/blog-service/blog.service";

@Component({
  selector: 'app-trainer-blog-details',
  templateUrl: './trainer-blog-details.component.html',
  styleUrls: ['./trainer-blog-details.component.css']
})
export class TrainerBlogDetailsComponent {
  blogDto!: BlogDto;
  blogId!: number

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
  }
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
   formatDate(dateString: string): string {
    const date = new Date(dateString);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day} ${year}`;
  }


}
