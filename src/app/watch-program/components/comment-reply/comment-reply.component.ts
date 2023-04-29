import {Component, Input} from '@angular/core';
import {CommentReplyDto} from "../../../@core/models/program.model";
import {CommentService} from "../../../@core/services/comment/comment.service";

@Component({
  selector: 'app-comment-reply',
  templateUrl: './comment-reply.component.html',
  styleUrls: ['./comment-reply.component.css']
})
export class CommentReplyComponent {
  @Input()
  reply!: CommentReplyDto;
  constructor(private commentService: CommentService) {
  }

  deleteReplay(id: number) {
    this.commentService.deleteReplyComment(id).subscribe({
      next: () => {
        window.location.reload();
      }
    });


  }
}
