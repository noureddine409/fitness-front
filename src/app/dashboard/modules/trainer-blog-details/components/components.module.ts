import {NgModule, Type} from '@angular/core';
import {BlogItemComponent} from './blog-item/blog-item.component';
import {SharedModule} from "../../../../@shared/shared.module";

export const TrainerBlogDetailComponents: Type<any>[] = [BlogItemComponent];

@NgModule({
  declarations: [...TrainerBlogDetailComponents],
  imports: [
    SharedModule
  ],
  exports: [...TrainerBlogDetailComponents]
})
export class ComponentsModule {
}
