import {NgModule, Type} from '@angular/core';
import {BlogItemComponent} from './blog-item/blog-item.component';
import {SharedModule} from "../../../../@shared/shared.module";
import { BlogDateComponent } from './blog-date/blog-date.component';
import { BlogDescriptionComponent } from './blog-description/blog-description.component';

export const TrainerBlogDetailComponents: Type<any>[] = [BlogItemComponent, BlogDateComponent, BlogDescriptionComponent];

@NgModule({
  declarations: [...TrainerBlogDetailComponents],
  imports: [
    SharedModule
  ],
    exports: [...TrainerBlogDetailComponents, BlogDateComponent]
})
export class ComponentsModule {
}
