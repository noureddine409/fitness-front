import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OurTrainersComponent} from "./our-trainers.component";
import {ComponentsModule} from "./components/components.module";



@NgModule({
  declarations: [OurTrainersComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[OurTrainersComponent]
})
export class OurTrainersModule { }
