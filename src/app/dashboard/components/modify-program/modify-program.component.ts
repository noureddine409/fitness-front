import {Component, OnInit} from '@angular/core';
import {ProgramDto} from "../../../@core/models/program.model";
import {ProgramService} from "../../../@core/services/program-service/program.service";

@Component({
  selector: 'app-modify-program',
  templateUrl: './modify-program.component.html',
  styleUrls: ['./modify-program.component.css']
})
export class ModifyProgramComponent implements OnInit {
  programDto!: ProgramDto;
  programPicture!:File;
  programPictureUrl!: string | ArrayBuffer | null;

  //@Input() programDto!: ProgramDto;
  constructor(private programService: ProgramService) {
  }

  ngOnInit(): void {
    this.programDto = this.programService.popProgramDto()
    this.programPicture=this.programService.popProgramPicture();
    this.createProgramPictureUrl();
  }
  createProgramPictureUrl() {
    const reader = new FileReader();
    reader.onload = (event) => {
      this.programPictureUrl = event.target!.result;
    };
    reader.readAsDataURL(this.programPicture);
  }

}
