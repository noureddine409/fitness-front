import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OurTrainersComponent} from "./our-trainers.component";
import {ComponentsModule} from "./components/components.module";
import {SharedModule} from "../@shared/shared.module";



@NgModule({
  declarations: [OurTrainersComponent],
  imports: [
    SharedModule,
    ComponentsModule
  ],
  exports:[OurTrainersComponent]
})
export class OurTrainersModule { }
