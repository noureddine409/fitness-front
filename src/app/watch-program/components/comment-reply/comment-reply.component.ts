import {Component, Input} from '@angular/core';
import {CommentReplyDto} from "../../../@core/models/program.model";

@Component({
  selector: 'app-comment-reply',
  templateUrl: './comment-reply.component.html',
  styleUrls: ['./comment-reply.component.css']
})
export class CommentReplyComponent {
  @Input()
  reply!: CommentReplyDto;
}
