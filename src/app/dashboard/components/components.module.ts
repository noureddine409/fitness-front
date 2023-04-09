import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddBlogComponent} from "./add-blog/add-blog.component";
import {AddProgramComponent} from "./add-program/add-program.component";
import {BasicCalendarComponent} from "./basic-calendar/basic-calendar.component";
import {TrainerBlogsComponent} from "./trainer-blogs/trainer-blogs.component";
import {ComposeComponent} from "./compose/compose.component";
import {DashboardHomeComponent} from "./dashboard-home/dashboard-home.component";
import {HeaderComponent} from "./header/header.component";
import {ListViewComponent} from "./list-view/list-view.component";
import {SideBarComponent} from "./side-bar/side-bar.component";
import {TrainerProfileComponent} from "./trainer-profile/trainer-profile.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TrainerProgramsComponent} from "./trainer-programs/trainer-programs.component";
const dashboardComponents: Type<any>[] = [AddBlogComponent,AddProgramComponent,BasicCalendarComponent,TrainerProgramsComponent,TrainerBlogsComponent,ComposeComponent,DashboardHomeComponent,HeaderComponent,ListViewComponent,SideBarComponent,TrainerProfileComponent];


@NgModule({
  declarations: [...dashboardComponents],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[...dashboardComponents]
})
export class ComponentsModule { }
