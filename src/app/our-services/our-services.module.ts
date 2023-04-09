import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from "./components/components.module";
import {OurServicesComponent} from "./our-services.component";



@NgModule({
  declarations: [OurServicesComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[OurServicesComponent]
})
export class OurServicesModule { }
