import {Component, Input, OnInit} from '@angular/core';
import {CommentDto} from "../../../@core/models/program.model";
import {CommentService} from "../../../@core/services/comment/comment.service";

@Component({
  selector: 'app-program-comment',
  templateUrl: './program-comment.component.html',
  styleUrls: ['./program-comment.component.css']
})
export class ProgramCommentComponent{

  @Input()
  comment!: CommentDto;
  selectedComment!: CommentDto;
  constructor(private commentService: CommentService) {
  }

  deleteComment(number: number) {
    this.commentService.deleteComment(number).subscribe({
      next: () => {
        window.location.reload();
      }
    })

  }
}
