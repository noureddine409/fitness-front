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



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'our-programs', component: OurProgramsComponent },
  { path: 'our-trainers', component: OurTrainersComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'forget-password', component: ForgetPasswordComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'complete-profile', component: MultiStepFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
