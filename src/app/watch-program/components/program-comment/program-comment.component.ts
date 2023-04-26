import {Component, Input, OnInit} from '@angular/core';
import {CommentDto} from "../../../@core/models/program.model";

@Component({
  selector: 'app-program-comment',
  templateUrl: './program-comment.component.html',
  styleUrls: ['./program-comment.component.css']
})
export class ProgramCommentComponent{

  @Input()
  comment!: CommentDto;

}
