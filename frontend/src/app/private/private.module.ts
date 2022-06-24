import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {PrivateRoutingModule} from "./private-routing.module";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { SiteComponent } from './site/site.component';
import { UserComponent } from './user/user.component';
import { NumberplateComponent } from './numberplate/numberplate.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SiteComponent,
    UserComponent,
    NumberplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    PrivateRoutingModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class PrivateModule { }
