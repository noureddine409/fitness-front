import {NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
const layoutComponents: Type<any>[] = [HeaderComponent,FooterComponent];

@NgModule({
  declarations: [...layoutComponents],
  imports: [
    CommonModule
  ],
  exports:[...layoutComponents]
})
export class LayoutModule { }
