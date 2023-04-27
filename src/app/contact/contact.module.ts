import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from "./components/components.module";
import {ContactComponent} from "./contact.component";
import {SharedModule} from "../@shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule
  ],
  exports:[ContactComponent]
})
export class ContactModule { }
