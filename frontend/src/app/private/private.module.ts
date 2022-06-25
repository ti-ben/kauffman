import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {PrivateRoutingModule} from "./private-routing.module";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { SiteComponent } from './site/site.component';
import { UserComponent } from './user/user.component';
import { NumberplateComponent } from './numberplate/numberplate.component';
import { SiteCreateComponent } from './site/component/site-create/site-create.component';
import { SiteDetailsComponent } from './site/component/site-details/site-details.component';
import {SiteListComponent} from "./site/component/site-list/site-list.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DashboardComponent,
    SiteComponent,
    UserComponent,
    NumberplateComponent,
    SiteCreateComponent,
    SiteDetailsComponent,
    SiteListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    PrivateRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class PrivateModule { }
