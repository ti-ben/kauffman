import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PrivateRoutingModule} from "./private-routing.module";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {SiteComponent} from './site/site.component';
import {UserComponent} from './user/user.component';
import {NumberplateComponent} from './numberplate/numberplate.component';
import {SiteCreateComponent} from './site/component/site-create/site-create.component';
import {SiteListComponent} from "./site/component/site-list/site-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NumberplateCreateComponent} from './numberplate/component/numberplate-create/numberplate-create.component';
import {NumberplateListComponent} from './numberplate/component/numberplate-list/numberplate-list.component';
import {UserListComponent} from './user/component/user-list/user-list.component';
import {UserCreateComponent} from './user/component/user-create/user-create.component';
import {UserDetailsComponent} from './user/component/user-details/user-details.component';
import {UserIdentityComponent} from './user/component/user-identity/user-identity.component';
import {UserAddressComponent} from './user/component/user-address/user-address.component';
import {UserAdrComponent} from './user/component/user-adr/user-adr.component';
import {UserCapComponent} from './user/component/user-cap/user-cap.component';
import {UserSelectmedComponent} from './user/component/user-selectmed/user-selectmed.component';
import {UserTachographComponent} from './user/component/user-tachograph/user-tachograph.component';
import {UserCredentialsComponent} from './user/component/user-credentials/user-credentials.component';
import {VehiculeComponent} from './vehicule/vehicule.component';
import {StatusComponent} from './status/status.component';
import {ProviderComponent} from './provider/provider.component';
import {ProviderListComponent} from './provider/component/provider-list/provider-list.component';
import {ProviderCreateComponent} from './provider/component/provider-create/provider-create.component';
import {ProviderUpdateComponent} from './provider/component/provider-update/provider-update.component';
import {SiteUpdateComponent} from "./site/component/site-update/site-update.component";
import {NumberplateUpdateComponent} from './numberplate/component/numberplate-update/numberplate-update.component';
import {RankComponent} from './rank/rank.component';
import {AddressComponent} from './address/address.component';
import {VehiculeCreateComponent} from './vehicule/component/vehicule-create/vehicule-create.component';
import {VehiculeListComponent} from './vehicule/component/vehicule-list/vehicule-list.component';
import {VehiculeDetailsComponent} from './vehicule/component/vehicule-details/vehicule-details.component';
import {VehiculeIdentityComponent} from './vehicule/component/vehicule-identity/vehicule-identity.component';
import {VehiculeCtrltechComponent} from './vehicule/component/vehicule-ctrltech/vehicule-ctrltech.component';
import {VehiculeIntervtechComponent} from './vehicule/component/vehicule-intervtech/vehicule-intervtech.component';
import {VehiculeMetrologyComponent} from './vehicule/component/vehicule-metrology/vehicule-metrology.component';
import {VehiculeAdrComponent} from './vehicule/component/vehicule-adr/vehicule-adr.component';
import {StatusListComponent} from './status/component/status-list/status-list.component';
import {RankListComponent} from './rank/component/rank-list/rank-list.component';
import {RankUpdateComponent} from './rank/component/rank-update/rank-update.component';
import {RankCreateComponent} from './rank/component/rank-create/rank-create.component';
import {StatusCreateComponent} from './status/component/status-create/status-create.component';
import {StatusUpdateComponent} from './status/component/status-update/status-update.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SiteComponent,
    UserComponent,
    NumberplateComponent,
    SiteCreateComponent,
    SiteListComponent,
    SiteUpdateComponent,
    NumberplateCreateComponent,
    NumberplateListComponent,
    UserListComponent,
    UserCreateComponent,
    UserDetailsComponent,
    UserIdentityComponent,
    UserAddressComponent,
    UserAdrComponent,
    UserCapComponent,
    UserSelectmedComponent,
    UserTachographComponent,
    UserCredentialsComponent,
    VehiculeComponent,
    StatusComponent,
    ProviderComponent,
    ProviderListComponent,
    ProviderCreateComponent,
    ProviderUpdateComponent,
    NumberplateUpdateComponent,
    RankComponent,
    AddressComponent,
    VehiculeCreateComponent,
    VehiculeListComponent,
    VehiculeDetailsComponent,
    VehiculeIdentityComponent,
    VehiculeCtrltechComponent,
    VehiculeIntervtechComponent,
    VehiculeMetrologyComponent,
    VehiculeAdrComponent,
    StatusListComponent,
    RankListComponent,
    RankUpdateComponent,
    RankCreateComponent,
    StatusCreateComponent,
    StatusUpdateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class PrivateModule {
}
