import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProgramDto} from "../../../../../@core/models/program.model";
import {programStateConfigMap} from "../../../../../@shared/constants";

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.css']
})
export class ProgramCardComponent {



  @Input()
  program!: ProgramDto;

  @Output() programClick = new EventEmitter<number>();
  programStateConfig = programStateConfigMap;

  accessProgram(id: number) {
    this.programClick.emit(id);
  }



}
