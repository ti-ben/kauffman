import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CommonModule} from "@angular/common";
import {SiteComponent} from "./site/site.component";
import {NumberplateComponent} from "./numberplate/numberplate.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path: 'site', component: SiteComponent, data: {crumbTitle: 'Site'}},
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
