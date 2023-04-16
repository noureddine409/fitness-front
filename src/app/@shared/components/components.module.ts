import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {ModalComponent} from "../modules/modal/modal.component";


export const SHARED_COMPONENTS: Type<any>[] = [];
@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS],
})
export class ComponentsModule { }
