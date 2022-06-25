import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CommonModule} from "@angular/common";
import {SiteComponent} from "./site/site.component";
import {NumberplateComponent} from "./numberplate/numberplate.component";
import {UserComponent} from "./user/user.component";
import {SiteCreateComponent} from "./site/component/site-create/site-create.component";
import {SiteListComponent} from "./site/component/site-list/site-list.component";
import {SiteDetailsComponent} from "./site/component/site-details/site-details.component";

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
      {path: 'user', component: UserComponent, data: {crumbTitle: 'User'}},
      {path: 'numberplate', component: NumberplateComponent, data: {crumbTitle: 'Immatriculation'}}
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
