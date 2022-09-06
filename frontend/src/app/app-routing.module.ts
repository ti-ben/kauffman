import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoPageFoundComponent} from "./shared/no-page-found/no-page-found.component";
import {AuthGuard} from "./shared/auth/auth.guard";

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'private', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)/*, canActivate: [AuthGuard]*/
  },
  {path: '**', component: NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
