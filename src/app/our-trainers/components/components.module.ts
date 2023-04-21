import {NgModule, Type} from '@angular/core';
import {SharedModule} from "../../@shared/shared.module";
import {TrainerCardComponent} from './trainer-card/trainer-card.component';
import { SearchTrainerComponent } from './search-trainer/search-trainer.component';
import { RecentBlogComponent } from './recent-blog/recent-blog.component';

const ourTrainersComponents: Type<any>[] = [TrainerCardComponent];

@NgModule({
  declarations: [...ourTrainersComponents, SearchTrainerComponent, RecentBlogComponent],
  imports: [
    SharedModule
  ],
  exports: [...ourTrainersComponents, RecentBlogComponent, SearchTrainerComponent]
})
export class ComponentsModule {
}
