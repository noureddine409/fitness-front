import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddBlogComponent} from "./add-blog/add-blog.component";
import {AddProgramComponent} from "./add-program/add-program.component";
import {BasicCalendarComponent} from "./basic-calendar/basic-calendar.component";
import {TrainerBlogsComponent} from "./trainer-blogs/trainer-blogs.component";
import {DashboardHomeComponent} from "./dashboard-home/dashboard-home.component";
import {HeaderComponent} from "./header/header.component";
import {ListViewComponent} from "./list-view/list-view.component";
import {SideBarComponent} from "./side-bar/side-bar.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TrainerProgramsComponent} from "./trainer-programs/trainer-programs.component";
import {ModifyProgramComponent} from "./modify-program/modify-program.component";
import {SharedModule} from "../../@shared/shared.module";
import {ReviewsComponent} from "./reviews/reviews.component";
import {AuthenticationModule} from "../../authentication/authentication.module";

const dashboardComponents: Type<any>[] = [AddBlogComponent,AddProgramComponent,ModifyProgramComponent, BasicCalendarComponent, TrainerProgramsComponent, TrainerBlogsComponent, DashboardHomeComponent, HeaderComponent, ListViewComponent, SideBarComponent,ReviewsComponent];


@NgModule({
  declarations: [...dashboardComponents],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        AuthenticationModule
    ],
  exports: [...dashboardComponents]
})
export class ComponentsModule {
}
