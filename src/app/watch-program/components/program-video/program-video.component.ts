import {Component, Input, OnInit} from '@angular/core';
import {ProgramSectionDto} from "../../../@core/models/program.model";

@Component({
  selector: 'app-program-video',
  templateUrl: './program-video.component.html',
  styleUrls: ['./program-video.component.css']
})
export class ProgramVideoComponent implements OnInit {
  @Input()
  programSection! : ProgramSectionDto;

  ngOnInit(): void {
  }

}
