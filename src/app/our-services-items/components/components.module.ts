import {NgModule, Type} from '@angular/core';
import {ServiceItemComponent} from './service-item/service-item.component';
import {SharedModule} from "../../@shared/shared.module";

const ourServicesItemsComponents: Type<any>[] = [ServiceItemComponent];

@NgModule({
  declarations: [
    ...ourServicesItemsComponents,
  ],
  imports: [
    SharedModule
  ],
  exports: [...ourServicesItemsComponents]
})
export class ComponentsModule {
}
