import {NgModule, Type} from '@angular/core';
import {SharedModule} from "../../@shared/shared.module";

const JoinComponents: Type<any>[] = [];


@NgModule({
  declarations: [...JoinComponents],
  imports: [
    SharedModule
  ],
  exports: [...JoinComponents]
})
export class ComponentsModule {
}
