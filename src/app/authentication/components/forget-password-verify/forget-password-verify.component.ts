import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../@core/services/authentication/auth.service";
import {TokenStorageService} from "../../../@core/services/token-storage/token-storage.service";
import {RESET_TOKEN_KEY} from "../../../@shared/constants";

@Component({
  selector: 'app-forget-password-verify',
  templateUrl: './forget-password-verify.component.html',
  styleUrls: ['./forget-password-verify.component.css']
})
export class ForgetPasswordVerifyComponent implements OnInit{

  private token!: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.token = params['code'];
      this.verifyToken();
    });
  }

  verifyToken(): void {
    this.authService.verifyToken(this.token).subscribe(
      (resetToken: any) => {
        console.log(resetToken)
        this.tokenStorageService.saveResetToken(resetToken);
        this.router.navigate(['/reset-password']);
      },
      (error: any) => {
        this.router.navigate(['/error-404']);
      }
    );
  }

}
