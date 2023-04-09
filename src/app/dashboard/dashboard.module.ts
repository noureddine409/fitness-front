import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {ComponentsModule} from "./components/components.module";
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterOutlet
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
