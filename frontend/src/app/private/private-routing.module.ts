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

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'site', component: SiteComponent, data: {crumbTitle: 'Site'},
        children: [
          {path: '', component: SiteListComponent, data: {crumbTitle: 'Liste des sites'}},
          {path: 'create', component: SiteCreateComponent, data: {crumbTitle: 'Ajouter un nouveau site'}},
          {path: 'create/:id', component: SiteCreateComponent, data: {crumbTitle: 'Mise à jour'}},
        ]
      },
      {path: 'user', component: UserComponent, data: {crumbTitle: 'User'},
        children: [
          {path: '', component: UserListComponent, data: {crumbTitle: 'Liste des utilisateurs'}},
          {path: 'create', component: UserCreateComponent, data: {crumbTitle: 'Ajouter un nouvel utilisateur'}},
          {path: 'details/:id', component: UserDetailsComponent, data: {crumbTitle: 'Détails'}},
        ]
      },
      {path: 'vehicule', component: VehiculeComponent, data: {crumbTitle: 'Vehicule'}
      },
      {path: 'status', component: StatusComponent, data: {crumbTitle: 'Status'}
      },
      {path: 'provider', component: ProviderComponent, data: {crumbTitle: 'Provider'}
      },
      {
        path: 'numberplate', component: NumberplateComponent, data: {crumbTitle: 'Immatriculation'},
        children: [
          {path: '', component: NumberplateListComponent, data: {crumbTitle: 'Liste des immatriculations'}},
          {path: 'create', component: NumberplateCreateComponent, data: {crumbTitle: 'Ajouter une nouvelle immatriculation'}},
          {path: 'create/:id', component: NumberplateCreateComponent, data: {crumbTitle: 'Mise à jour'}},
        ]
      }
    ]
  }
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
