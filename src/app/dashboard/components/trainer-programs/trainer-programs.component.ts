import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-programs',
  templateUrl: './trainer-programs.component.html',
  styleUrls: ['./trainer-programs.component.css']
})
export class TrainerProgramsComponent {
  constructor(private router:Router) {
  }
  goToOtherComponent(url:string) {
    this.router.navigate([url]);
  }
}
