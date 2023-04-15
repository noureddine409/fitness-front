import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ValidationMessageComponent} from "./validation-message.component";

const VALIDATION_COMPONENTS = [ValidationMessageComponent];

@NgModule({
  declarations: [...VALIDATION_COMPONENTS],
  imports: [CommonModule],
  exports: [...VALIDATION_COMPONENTS],
  providers: [],
})
export class ValidationMessageModule { }
