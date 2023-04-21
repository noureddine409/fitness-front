import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainSliderComponent} from "./main-slider/main-slider.component";
import {ServiceDescriptionComponent} from "./service-description/service-description.component";
import {SharedModule} from "../../@shared/shared.module";

const hComponents: Type<any>[] =[MainSliderComponent,ServiceDescriptionComponent];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [...hComponents],
  exports: [...hComponents]
})
export class ComponentsModule { }
