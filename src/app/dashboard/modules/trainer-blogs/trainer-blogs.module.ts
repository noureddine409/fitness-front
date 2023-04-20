import {NgModule} from '@angular/core';
import {TrainerBlogsComponent} from "./trainer-blogs.component";
import {SharedModule} from "../../../@shared/shared.module";
import {ComponentsModule} from "./components/components.module";


@NgModule({
  declarations: [TrainerBlogsComponent],
  imports: [
    SharedModule,
    ComponentsModule
  ],
  exports: [TrainerBlogsComponent]
})
export class TrainerBlogsModule {
}
