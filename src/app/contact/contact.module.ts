import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from "./components/components.module";
import {ContactComponent} from "./contact.component";



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[ContactComponent]
})
export class ContactModule { }
