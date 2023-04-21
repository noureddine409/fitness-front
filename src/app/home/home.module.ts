import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {ComponentsModule} from "./components/components.module";
import {OurServicesItemsModule} from "../our-services-items/our-services-items.module";
import {WhatPeopleSayModule} from "../what-people-say/what-people-say.module";
import {PopularProgramsModule} from "../popular-programs/popular-programs.module";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    OurServicesItemsModule,
    WhatPeopleSayModule,
    PopularProgramsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {
}
