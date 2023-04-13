import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  constructor(private router:Router) {
  }
  ngOnInit() {
  }
  goToOtherComponent(url:string) {
    this.router.navigate([url]);
  }
}
