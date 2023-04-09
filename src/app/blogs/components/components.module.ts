import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainSliderComponent} from "../../home/components/main-slider/main-slider.component";

const blogsComponents: Type<any>[] = [];

@NgModule({
  declarations: [...blogsComponents],
  imports: [
    CommonModule
  ],
  exports:[...blogsComponents]
})
export class ComponentsModule { }
