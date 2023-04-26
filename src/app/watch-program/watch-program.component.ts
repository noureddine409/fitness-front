import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProgramDto, ProgramSectionDto} from "../@core/models/program.model";
import {ProgramService} from "../@core/services/program-service/program.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentService} from "../@core/services/comment/comment.service";

@Component({
  selector: 'app-watch-program',
  templateUrl: './watch-program.component.html',
  styleUrls: ['./watch-program.component.css']
})
export class WatchProgramComponent implements OnInit {
  programDto!: ProgramDto;
  programId!: number;
  selectedSection!: ProgramSectionDto;

  commentForm!: FormGroup;

  errorMessage = "";

  submitted = false;

  constructor(private router: Router, private programService: ProgramService, private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder, private commentService: CommentService) {

  }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group(
      {
        comment: this.formBuilder.control(null, [Validators.required])
      }
    )
    const param = this.activatedRoute.snapshot.paramMap.get("id")
    if (param == null) {
      this.router.navigate(['/error-404']);
      return
    }
    this.programId = parseInt(param, 10);
    this.programService.findById(this.programId).subscribe(
      data => {
        this.programDto = data;
        this.selectedSection = this.programDto.sections[0];
      },
      () => {
        this.router.navigate(["/error-404"]);
      }
    );
  }
  goToOtherComponent(url:string) {
    this.router.navigate([url]);
  }

  changeVideo(section: ProgramSectionDto) {
    this.selectedSection = section;
  }

  handleAddComment() {
    if(this.commentForm.invalid) {
      return
    }

    this.commentService.addComment(this.selectedSection.id!, this.commentForm.value.comment).subscribe(
      value => {
        this.selectedSection.comments?.push(value);
      }
    )
  }
}
