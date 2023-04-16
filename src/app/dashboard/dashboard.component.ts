import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ProgramDto} from "../@core/models/program.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  programDto!: ProgramDto;
  constructor(private router:Router) {
  }
}
