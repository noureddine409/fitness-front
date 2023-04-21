import {Component, Input, OnInit} from '@angular/core';
import {ProgramsModule} from "./programs.module";
import {ProgramDto} from "../@core/models/program.model";

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  @Input() programsTitle!: string;
  @Input() programsDescription!: string;
  @Input() programs!: ProgramDto[];
  ngOnInit() {
  }
}
