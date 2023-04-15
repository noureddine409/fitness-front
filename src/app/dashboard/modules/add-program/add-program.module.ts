import { NgModule } from '@angular/core';
import {AddProgramComponent} from "./add-program.component";
import {SharedModule} from "../../../@shared/shared.module";



@NgModule({
  declarations: [AddProgramComponent],
  imports: [
    SharedModule
  ],
  exports:[AddProgramComponent]
})
export class AddProgramModule { }
