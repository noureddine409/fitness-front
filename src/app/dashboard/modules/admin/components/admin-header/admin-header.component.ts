import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AppUser} from "../../../../../@core/models/user.model";
import {TokenStorageService} from "../../../../../@core/services/token-storage/token-storage.service";
import {TOKEN_KEY} from "../../../../../@shared/constants";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit{

  private currentUserSubscription!: Subscription;

  currentUser!: AppUser | null;
  constructor(private router: Router,private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
    const token = this.tokenStorageService.getToken(TOKEN_KEY);

    this.currentUserSubscription = this.tokenStorageService.currentUser$.subscribe(
      user => {
        this.currentUser = user;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }
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
