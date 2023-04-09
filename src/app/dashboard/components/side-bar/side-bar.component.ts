import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  constructor(private router: Router) {
  }
  goToOtherComponent(url:string) {
    this.router.navigate([url]);
  }
}
