import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {OurProgramsComponent} from "./components/our-programs/our-programs.component";
import {OurTrainersComponent} from "./components/our-trainers/our-trainers.component";
import {ContactComponent} from "./components/contact/contact.component";
import {ForgetPasswordComponent} from "./components/forget-password/forget-password.component";
import {BlogsComponent} from "./components/blogs/blogs.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {MultiStepFormComponent} from "./components/multi-step-form/multi-step-form.component";
import {HomeGuard} from "./guards/home/home.guard";
import {ActivateAccountComponent} from "./components/activate-account/activate-account.component";
import {VerifyAccountComponent} from "./components/verify-account/verify-account.component";
import {CompleteProfileGuard} from "./guards/complete-profile/complete-profile.guard";
import {AuthGuard} from "./guards/auth/auth.guard";
import {ForgetPasswordMailComponent} from "./components/forget-password-mail/forget-password-mail.component";
import {ResetPasswordComponent} from "./components/reset-password/reset-password.component";
import {ErrorComponent} from "./components/error/error.component";
import {ForgetPasswordVerifyComponent} from "./components/forget-password-verify/forget-password-verify.component";
import {ResetPasswordGuard} from "./guards/reset-password/reset-password.guard";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , canActivate: [HomeGuard]},
  { path: 'our-programs', component: OurProgramsComponent, canActivate: [HomeGuard]},
  { path: 'our-trainers', component: OurTrainersComponent, canActivate: [HomeGuard] },
  { path: 'blogs', component: BlogsComponent, canActivate: [HomeGuard] },
  { path: 'contact-us', component: ContactComponent, canActivate: [HomeGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  { path: 'forget-password', component: ForgetPasswordComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [HomeGuard]},
  { path: 'complete-profile', component: MultiStepFormComponent, canActivate: [CompleteProfileGuard]},
  { path: 'activate-account', component: ActivateAccountComponent, canActivate: [CompleteProfileGuard]},
  { path: 'verify-account', component: VerifyAccountComponent},
  { path: 'forget-password-email', component: ForgetPasswordMailComponent},
  { path: 'forget-password-verify', component: ForgetPasswordVerifyComponent},
  { path: 'reset-password', component: ResetPasswordComponent, canActivate: [ResetPasswordGuard]},
  { path: 'error-404', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
