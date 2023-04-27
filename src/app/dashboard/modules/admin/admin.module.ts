import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../../@shared/shared.module";
import {ComponentsModule} from "./components/components.module";
import {AdminComponent} from "./admin.component";
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [AdminComponent],
  imports: [
    SharedModule,
    ComponentsModule,
    RouterOutlet
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
