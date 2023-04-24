import {NgModule} from '@angular/core';
import {SharedModule} from "../@shared/shared.module";
import {ComponentsModule} from "./components/components.module";
import {JoinUsComponent} from "./join-us.component";


@NgModule({
  declarations: [JoinUsComponent],
  imports: [
    SharedModule,
    ComponentsModule
  ],
  exports:[JoinUsComponent]
})
export class JoinUsModule {
}
