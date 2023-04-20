import {NgModule, Type} from '@angular/core';
import {BlogCardComponent} from './blog-card/blog-card.component';
import {SharedModule} from "../../../../@shared/shared.module";


export const TrainerBlogsComponents: Type<any>[] = [BlogCardComponent];

@NgModule({
  declarations: [...TrainerBlogsComponents],
  imports: [
    SharedModule
  ],
  exports: [...TrainerBlogsComponents]
})
export class ComponentsModule {
}
