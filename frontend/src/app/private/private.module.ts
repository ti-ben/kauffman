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
import {SiteListComponent} from "./site/component/site-list/site-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import { NumberplateCreateComponent } from './numberplate/component/numberplate-create/numberplate-create.component';
import { NumberplateListComponent } from './numberplate/component/numberplate-list/numberplate-list.component';
import { UserListComponent } from './user/component/user-list/user-list.component';
import { UserCreateComponent } from './user/component/user-create/user-create.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SiteComponent,
    UserComponent,
    NumberplateComponent,
    SiteCreateComponent,
    SiteListComponent,
    NumberplateCreateComponent,
    NumberplateListComponent,
    UserListComponent,
    UserCreateComponent
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
