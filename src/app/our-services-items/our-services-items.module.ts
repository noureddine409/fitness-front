import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from "./components/components.module";
import {OurServicesItemsComponent} from "./our-services-items.component";
import {Router} from "@angular/router";
import {SharedModule} from "../@shared/shared.module";



@NgModule({
  declarations: [OurServicesItemsComponent],
  imports: [
    SharedModule,
    ComponentsModule
  ],
  exports:[OurServicesItemsComponent]
})
export class OurServicesItemsModule {


}
