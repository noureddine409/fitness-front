import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainSliderComponent} from "./main-slider/main-slider.component";

const hComponents: Type<any> =MainSliderComponent;

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [hComponents],
  exports: [hComponents]
})
export class ComponentsModule { }
