import {NgModule, Type} from '@angular/core';
import {AuthenticationModule} from "../../../../authentication/authentication.module";
import {SharedModule} from "../../../../@shared/shared.module";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {AdminHeaderComponent} from "./admin-header/admin-header.component";
import {AdminSideBarComponent} from "./admin-side-bar/admin-side-bar.component";
import {SubmittedProgramsComponent} from './submitted-programs/submitted-programs.component';
import {JoinRequestsComponent} from './join-requests/join-requests.component';
import {TrProgramsComponentsModule} from "../../trainer-programs/components/components.module";
import { RequestCardComponent } from './request-card/request-card.component';

const adminComponents: Type<any>[] = [AdminHomeComponent, AdminHeaderComponent, AdminSideBarComponent];


@NgModule({
  declarations: [...adminComponents, SubmittedProgramsComponent, JoinRequestsComponent, RequestCardComponent],
  imports: [
    SharedModule,
    AuthenticationModule,
    TrProgramsComponentsModule
  ],
  exports: [...adminComponents]
})
export class ComponentsModule {
}
