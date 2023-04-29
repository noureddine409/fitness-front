import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalRespondComponent} from "./modal-respond.component";
import {ValidationMessageModule} from "../validation-message/validation-message.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [ModalRespondComponent],
  imports: [CommonModule, ValidationMessageModule, ReactiveFormsModule],
  exports: [ModalRespondComponent],
  providers: [],
})
export class ModalRespondModule { }
