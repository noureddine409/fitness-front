import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from "./components/components.module";
import {OurServicesItemsComponent} from "./our-services-items.component";



@NgModule({
  declarations: [OurServicesItemsComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[OurServicesItemsComponent]
})
export class OurServicesItemsModule { }
