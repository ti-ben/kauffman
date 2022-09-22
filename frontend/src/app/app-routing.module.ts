import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoPageFoundComponent} from "./shared/no-page-found/no-page-found.component";

const routes: Routes = [

  {
    path: 'public',
    /* canActivate: [PublicGuard],*/
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'private',
    /*canActivate: [PrivateGuard],*/
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)
  },
  {path: '**', component: NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
