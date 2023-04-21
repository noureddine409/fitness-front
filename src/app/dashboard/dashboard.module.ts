import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {ComponentsModule} from "./components/components.module";
import {RouterOutlet} from "@angular/router";
import {SharedModule} from "../@shared/shared.module";
import {TrainerProgramsModule} from "./modules/trainer-programs/trainer-programs.module";
import {TrainerBlogsModule} from "./modules/trainer-blogs/trainer-blogs.module";
import {TrainerBlogDetailsModule} from "./modules/trainer-blog-details/trainer-blog-details.module";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    ComponentsModule,
    RouterOutlet,
    SharedModule,
    TrainerProgramsModule,
    TrainerBlogsModule,
    TrainerBlogDetailsModule,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {
}
