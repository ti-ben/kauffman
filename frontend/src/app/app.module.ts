import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoPageFoundComponent} from './shared/no-page-found/no-page-found.component';
import {ApiService} from "./shared/services/api.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PublicGuard} from "./security/guard/public.guard";
import {PrivateGuard} from "./security/guard/private.guard";

@NgModule({
  declarations: [
    AppComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    PublicGuard,
    PrivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
