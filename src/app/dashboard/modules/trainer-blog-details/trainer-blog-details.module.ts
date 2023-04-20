import {NgModule} from '@angular/core';
import {TrainerBlogDetailsComponent} from "./trainer-blog-details.component";
import {SharedModule} from "../../../@shared/shared.module";
import {ComponentsModule} from "./components/components.module";


@NgModule({
  declarations: [TrainerBlogDetailsComponent],
  imports: [
    SharedModule,
    ComponentsModule
  ],
  exports: [TrainerBlogDetailsComponent]
})
export class TrainerBlogDetailsModule {
}
