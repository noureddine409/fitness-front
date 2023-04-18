import {Component, Input} from '@angular/core';
import {ProgramSectionDto} from "../../../@core/models/program.model";

@Component({
  selector: 'app-program-panel',
  templateUrl: './program-panel.component.html',
  styleUrls: ['./program-panel.component.css']
})
export class ProgramPanelComponent {
  constructor() { }
  @Input()
  programSection! : ProgramSectionDto;
  @Input()
  faqId!: string;

}
