import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WhatPeopleSayComponent} from "./what-people-say.component";
import {ComponentsModule} from "./components/components.module";



@NgModule({
  declarations: [WhatPeopleSayComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[WhatPeopleSayComponent]
})
export class WhatPeopleSayModule { }
