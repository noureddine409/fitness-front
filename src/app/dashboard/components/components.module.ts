import {NgModule, Type} from '@angular/core';
import {AddBlogComponent} from "./add-blog/add-blog.component";
import {BasicCalendarComponent} from "./basic-calendar/basic-calendar.component";
import {DashboardHomeComponent} from "./dashboard-home/dashboard-home.component";
import {HeaderComponent} from "./header/header.component";
import {ListViewComponent} from "./list-view/list-view.component";
import {SideBarComponent} from "./side-bar/side-bar.component";
import {TrainerProgramComponent} from "./trainer-program/trainer-program.component";
import {SharedModule} from "../../@shared/shared.module";
import {ReviewsComponent} from "./reviews/reviews.component";
import {AuthenticationModule} from "../../authentication/authentication.module";
import {AddProgramComponent} from "./add-program/add-program.component";
import {ModifyBlogComponent} from "./modify-blog/modify-blog.component";

const dashboardComponents: Type<any>[] = [ModifyBlogComponent,AddBlogComponent,AddProgramComponent, TrainerProgramComponent, BasicCalendarComponent, DashboardHomeComponent, HeaderComponent, ListViewComponent, SideBarComponent, ReviewsComponent];


@NgModule({
  declarations: [...dashboardComponents],
  imports: [
    SharedModule,
    AuthenticationModule
  ],
  exports: [...dashboardComponents]
})
export class ComponentsModule {
}
