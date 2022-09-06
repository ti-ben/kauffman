import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoPageFoundComponent} from './shared/no-page-found/no-page-found.component';
import {ApiService} from "./shared/services/api.service";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthInterceptor} from "./shared/auth/authconfig.interceptor";


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
  providers: [ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
