import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {ComponentsModule} from "./components/components.module";
import {RouterOutlet} from "@angular/router";
import {ModifyProgramModule} from "../modify-program/modify-program.module";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterOutlet,
    ModifyProgramModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
