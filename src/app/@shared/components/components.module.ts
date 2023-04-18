import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {AlertComponent} from "./alert/alert.component";


export const SHARED_COMPONENTS: Type<any>[] = [AlertComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS],
})
export class ComponentsModule {
}
