import {AfterViewInit, Component} from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorageService} from "../../../@core/services/token-storage/token-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  constructor(private router: Router,private tokenStorageService: TokenStorageService) {
  }
  goToOtherComponent(url:string) {
    this.router.navigate([url]);
  }
  logOut() {
    this.tokenStorageService.setCurrentUser(null);
    this.tokenStorageService.signOut();
    this.router.navigate(['/home'])
  }



}
