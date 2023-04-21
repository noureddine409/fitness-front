import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProgramsModule} from "../../programs.module";
import {ProgramDto} from "../../../@core/models/program.model";

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  @Input() program!: ProgramDto;
  constructor(private router:Router) {
  }
  ngOnInit() {
  }
  goToOtherComponent(url:string) {
    this.router.navigate([url]);
  }
}
