import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CommonModule} from "@angular/common";
import {SiteComponent} from "./site/site.component";
import {NumberplateComponent} from "./numberplate/numberplate.component";
import {UserComponent} from "./user/user.component";
import {SiteCreateComponent} from "./site/component/site-create/site-create.component";
import {SiteListComponent} from "./site/component/site-list/site-list.component";
import {NumberplateListComponent} from "./numberplate/component/numberplate-list/numberplate-list.component";
import {NumberplateCreateComponent} from "./numberplate/component/numberplate-create/numberplate-create.component";
import {UserCreateComponent} from "./user/component/user-create/user-create.component";
import {UserListComponent} from "./user/component/user-list/user-list.component";
import {UserDetailsComponent} from "./user/component/user-details/user-details.component";
import {VehiculeComponent} from "./vehicule/vehicule.component";
import {StatusComponent} from "./status/status.component";
import {ProviderComponent} from "./provider/provider.component";
import {ProviderListComponent} from "./provider/component/provider-list/provider-list.component";
import {ProviderCreateComponent} from "./provider/component/provider-create/provider-create.component";
import {ProviderUpdateComponent} from "./provider/component/provider-update/provider-update.component";
import {SiteUpdateComponent} from "./site/component/site-update/site-update.component";
import {NumberplateUpdateComponent} from "./numberplate/component/numberplate-update/numberplate-update.component";
import {VehiculeListComponent} from "./vehicule/component/vehicule-list/vehicule-list.component";
import {VehiculeCreateComponent} from "./vehicule/component/vehicule-create/vehicule-create.component";
import {VehiculeDetailsComponent} from "./vehicule/component/vehicule-details/vehicule-details.component";
import {RankComponent} from "./rank/rank.component";
import {StatusListComponent} from "./status/component/status-list/status-list.component";
import {RankListComponent} from "./rank/component/rank-list/rank-list.component";
import {RankCreateComponent} from "./rank/component/rank-create/rank-create.component";
import {RankUpdateComponent} from "./rank/component/rank-update/rank-update.component";
import {StatusCreateComponent} from "./status/component/status-create/status-create.component";
import {StatusUpdateComponent} from "./status/component/status-update/status-update.component";
import {NoPageFoundComponent} from "../shared/no-page-found/no-page-found.component";

const routes: Routes = [

  {
    path: '', component: DashboardComponent,
    children: [
      {
        path: 'site', component: SiteComponent, data: {crumbTitle: 'Site'},
        children: [
          {path: '', component: SiteListComponent, data: {crumbTitle: 'Liste des sites'}},
          {path: 'create', component: SiteCreateComponent, data: {crumbTitle: 'Ajouter un nouveau site'}},
          {path: 'update/:id', component: SiteUpdateComponent, data: {crumbTitle: 'Mise à jour'}},
        ]
      },
      {
        path: 'user', component: UserComponent, data: {crumbTitle: 'User'},
        children: [
          {path: '', component: UserListComponent, data: {crumbTitle: 'Liste des utilisateurs'}},
          {path: 'create', component: UserCreateComponent, data: {crumbTitle: 'Ajouter un nouvel utilisateur'}},
          {path: 'details/:id', component: UserDetailsComponent, data: {crumbTitle: 'Mise à jour'}},
        ]
      },
      {
        path: 'vehicule', component: VehiculeComponent, data: {crumbTitle: 'Vehicule'},
        children: [
          {path: '', component: VehiculeListComponent, data: {crumbTitle: 'Liste des véhicules'}},
          {path: 'create', component: VehiculeCreateComponent, data: {crumbTitle: 'Ajouter un nouveau véhicule'}},
          {path: 'details/:id', component: VehiculeDetailsComponent, data: {crumbTitle: 'Mise à jour'}},
        ]
      },
      {
        path: 'status', component: StatusComponent, data: {crumbTitle: 'Status'},
        children: [
          {path: '', component: StatusListComponent, data: {crumbTitle: 'Liste des statuts'}},
          {path: 'create', component: StatusCreateComponent, data: {crumbTitle: 'Ajouter un nouveau statut'}},
          {path: 'update/:id', component: StatusUpdateComponent, data: {crumbTitle: 'Mise à jour'}},
        ]
      },
      {
        path: 'rank', component: RankComponent, data: {crumbTitle: 'Rang'},
        children: [
          {path: '', component: RankListComponent, data: {crumbTitle: 'Liste des rangs'}},
          {path: 'create', component: RankCreateComponent, data: {crumbTitle: 'Ajouter un nouveau rang'}},
          {path: 'update/:id', component: RankUpdateComponent, data: {crumbTitle: 'Mise à jour'}},
        ]
      },
      {
        path: 'provider', component: ProviderComponent, data: {crumbTitle: 'Provider'},
        children: [
          {path: '', component: ProviderListComponent, data: {crumbTitle: 'Liste des prestataires'}},
          {
            path: 'create',
            component: ProviderCreateComponent,
            data: {crumbTitle: 'Ajouter un nouveau prestataire de service'}
          },
          {path: 'update/:id', component: ProviderUpdateComponent, data: {crumbTitle: 'Mise à jour'}},
        ]
      },
      {
        path: 'numberplate', component: NumberplateComponent, data: {crumbTitle: 'Immatriculation'},
        children: [
          {path: '', component: NumberplateListComponent, data: {crumbTitle: 'Liste des immatriculations'}},
          {
            path: 'create',
            component: NumberplateCreateComponent,
            data: {crumbTitle: 'Ajouter une nouvelle immatriculation'}
          },
          {path: 'update/:id', component: NumberplateUpdateComponent, data: {crumbTitle: 'Mise à jour'}},
        ]
      }
    ]
  },
  {
    path: '**',
    component: NoPageFoundComponent
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PrivateRoutingModule {
}
