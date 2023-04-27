import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProgramDto} from "../../../../../@core/models/program.model";
import {programStateConfigMap} from "../../../../../@shared/constants";
import {ProgramService} from "../../../../../@core/services/program-service/program.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.css']
})
export class ProgramCardComponent {

  constructor(private programService: ProgramService, private router: Router) {
  }



  @Input()
  program!: ProgramDto;
  @Input()
  isAdmin!: boolean;

  @Output() programClick = new EventEmitter<number>();

  @Output() programDelete = new EventEmitter<number>();

  @Output() programCancel = new EventEmitter<number>();
  @Output() programSubmit = new EventEmitter<number>();
  programStateConfig = programStateConfigMap;

  accessProgram(id: number) {
    this.programClick.emit(id);
  }


  submitProgram() {
    this.programService.submitProgram(this.program.id!).subscribe(
      value => {
        this.program = value;
      }
    )
  }

  deleteProgram() {
    this.programDelete.emit(this.program.id)
  }

  cancelProgram() {
    this.programService.cancelProgramSubmission(this.program.id!).subscribe(
      value => {
        this.program = value;
      }
    )

  }

  updateProgram() {
      this.router.navigate([`/dashboard/modify-Program/${this.program.id}`]);
  }

  validateProgram() {
    this.programService.validateProgram(this.program.id!).subscribe(
      value => {
        this.program = value;
      }
    )
  }

  rejectProgram() {
this.programService.rejectProgram(this.program.id!).subscribe(
      value => {
        this.program = value;
      }
    )

  }
}
