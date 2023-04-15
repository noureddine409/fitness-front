import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ComponentsModule } from "./components/components.module";
import {ValidationMessageModule} from "./modules/validation-message/validation-message.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ValidationMessageModule,
  ],
  declarations: [],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ValidationMessageModule,
  ],
})
export class SharedModule {
}