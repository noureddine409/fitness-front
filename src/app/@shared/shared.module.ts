import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ComponentsModule } from "./components/components.module";
import {ValidationMessageModule} from "./modules/validation-message/validation-message.module";
import {ModalModule} from "./modules/modal/modal.module";
import {ModalRespondModule} from "./modules/modal-respond/modal-respond.module";
import {CreateArrayPipe} from "./pipes/create-array-pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ValidationMessageModule,
    ModalModule
  ],
  declarations: [CreateArrayPipe],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ValidationMessageModule,
    ModalModule,
    ModalRespondModule,
    CreateArrayPipe
  ],
})
export class SharedModule {
}
