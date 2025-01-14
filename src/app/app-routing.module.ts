import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent as ProfileComponentPublic} from "./profile/profile.component";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {OurProgramsComponent} from "./our-programs/our-programs.component";
import {OurTrainersComponent} from "./our-trainers/our-trainers.component";
import {ContactComponent} from "./contact/contact.component";
import {ForgetPasswordComponent} from "./authentication/components/forget-password/forget-password.component";
import {BlogsComponent} from "./blogs/blogs.component";
import {ProfileComponent} from "./authentication/components/profile/profile.component";
import {
  CompleteProfileFormComponent
} from "./authentication/components/complete-profile/complete-profile-form.component";
import {HomeGuard} from "./@core/guards/home/home.guard";
import {ActivateAccountComponent} from "./authentication/components/activate-account/activate-account.component";
import {VerifyAccountComponent} from "./authentication/components/verify-account/verify-account.component";
import {CompleteProfileGuard} from "./@core/guards/complete-profile/complete-profile.guard";
import {AuthGuard} from "./@core/guards/auth/auth.guard";
import {
  ForgetPasswordMailComponent
} from "./authentication/components/forget-password-mail/forget-password-mail.component";
import {ResetPasswordComponent} from "./authentication/components/reset-password/reset-password.component";
import {
  ForgetPasswordVerifyComponent
} from "./authentication/components/forget-password-verify/forget-password-verify.component";
import {ResetPasswordGuard} from "./@core/guards/reset-password/reset-password.guard";
import {WatchProgramComponent} from "./watch-program/watch-program.component";
import {RegisterComponent} from "./authentication/components/register/register.component";
import {LoginComponent} from "./authentication/components/login/login.component";
import {ErrorComponent} from "./authentication/components/error/error.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TrainerProgramsComponent} from "./dashboard/modules/trainer-programs/trainer-programs.component";
import {BasicCalendarComponent} from "./dashboard/components/basic-calendar/basic-calendar.component";
import {ListViewComponent} from "./dashboard/components/list-view/list-view.component";
import {ReviewsComponent} from "./dashboard/components/reviews/reviews.component";
import {AddBlogComponent} from "./dashboard/components/add-blog/add-blog.component";
import {DashboardHomeComponent} from "./dashboard/components/dashboard-home/dashboard-home.component";
import {TrainerBlogsComponent} from "./dashboard/modules/trainer-blogs/trainer-blogs.component";
import {ProfileGuard} from "./@core/guards/profile/profile.guard";
import {ProgramDetailsComponent} from "./program-details/program-details.component";
import {DashboardGuard} from "./@core/guards/dashboard/dashboard.guard";
import {TrainerProgramComponent} from "./dashboard/components/trainer-program/trainer-program.component";
import {TrainerBlogDetailsComponent} from "./dashboard/modules/trainer-blog-details/trainer-blog-details.component";
import {AddProgramComponent} from "./dashboard/components/add-program/add-program.component";
import {ModifyBlogComponent} from "./dashboard/components/modify-blog/modify-blog.component";
import {ModifyProgramComponent} from "./dashboard/modules/modify-program/modify-program.component";
import {JoinUsComponent} from "./join-us/join-us.component";
import {CompleteOrderComponent} from "./complete-order/complete-order.component";
import {WatchProgramGuard} from "./@core/guards/watch-program/watch-program.guard";
import {AdminHomeComponent} from "./dashboard/modules/admin/components/admin-home/admin-home.component";
import {AdminComponent} from "./dashboard/modules/admin/admin.component";
import {
  SubmittedProgramsComponent
} from "./dashboard/modules/admin/components/submitted-programs/submitted-programs.component";
import {JoinRequestsComponent} from "./dashboard/modules/admin/components/join-requests/join-requests.component";
import {AdminGuard} from "./@core/guards/admin/admin.guard";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [HomeGuard]},
  {path: 'complete', component: CompleteOrderComponent},
  {path: 'our-programs', component: OurProgramsComponent, canActivate: [HomeGuard]},
  {path: 'program-details/:id', component: ProgramDetailsComponent, canActivate: [HomeGuard]},
  {path: 'blog-details/:id', component: TrainerBlogDetailsComponent, canActivate: [HomeGuard]},
  {path: 'user-details/:id', component: ProfileComponentPublic, canActivate: [HomeGuard]},
  {path: 'watch-program/:id', component: WatchProgramComponent, canActivate: [HomeGuard,WatchProgramGuard]},
  {path: 'our-trainers', component: OurTrainersComponent, canActivate: [HomeGuard]},
  {path: 'blogs', component: BlogsComponent, canActivate: [HomeGuard]},
  {path: 'contact-us', component: ContactComponent, canActivate: [HomeGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'forget-password', component: ForgetPasswordComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [HomeGuard, ProfileGuard]},
  {path: 'complete-profile', component: CompleteProfileFormComponent, canActivate: [CompleteProfileGuard]},
  {path: 'activate-account', component: ActivateAccountComponent, canActivate: [CompleteProfileGuard]},
  {path: 'verify-account', component: VerifyAccountComponent},
  {path: 'forget-password-email', component: ForgetPasswordMailComponent},
  {path: 'forget-password-verify', component: ForgetPasswordVerifyComponent},
  {path: 'reset-password', component: ResetPasswordComponent, canActivate: [ResetPasswordGuard]},
  {path: 'error-404', component: ErrorComponent},
  {path:'join-us',component:JoinUsComponent},
  {
    path: 'dashboard', component: DashboardComponent,canActivate: [HomeGuard,DashboardGuard], children: [
      {path: '', component: DashboardHomeComponent},
      {path: 'home', component: DashboardHomeComponent},
      {path: 'admin',component:AdminComponent, canActivate: [AdminGuard], children: [
          {path: '', component: AdminHomeComponent},
          {path: 'home', component: AdminHomeComponent},
          {path: 'programs', component: SubmittedProgramsComponent},
          {path: 'requests',component:JoinRequestsComponent},
        ]},
      {path: 'programs', component: TrainerProgramsComponent},
      {path: 'blogs', component: TrainerBlogsComponent},
      {path: 'basic-calendar', component: BasicCalendarComponent},
      {path: 'list-view', component: ListViewComponent},
      {path: 'reviews', component: ReviewsComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'add-Program', component: AddProgramComponent},
      {path: 'program-details/:id', component: TrainerProgramComponent},
      {path: 'blog-details/:id', component: TrainerBlogDetailsComponent},
      {path: 'modify-Blog/:id', component: ModifyBlogComponent},
      {path: 'modify-Program/:id', component: ModifyProgramComponent},

      {path: 'add-Blog', component: AddBlogComponent},
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
