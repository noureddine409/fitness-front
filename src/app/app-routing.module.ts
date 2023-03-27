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
import {ProfileGuard} from "./guards/auth/profile.guard";
import {ActivateAccountComponent} from "./components/activate-account/activate-account.component";
import {VerifyAccountComponent} from "./components/verfy-account/verify-account.component";



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , canActivate: [ProfileGuard]},
  { path: 'our-programs', component: OurProgramsComponent, canActivate: [ProfileGuard]},
  { path: 'our-trainers', component: OurTrainersComponent, canActivate: [ProfileGuard] },
  { path: 'blogs', component: BlogsComponent, canActivate: [ProfileGuard] },
  { path: 'contact-us', component: ContactComponent, canActivate: [ProfileGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'forget-password', component: ForgetPasswordComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [ProfileGuard]},
  { path: 'complete-profile', component: MultiStepFormComponent},
  { path: 'activate-account', component: ActivateAccountComponent},
  { path: 'verify-account', component: VerifyAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
