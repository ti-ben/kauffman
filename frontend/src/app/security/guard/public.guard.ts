import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {
  canAccess:boolean = false

  public constructor(public router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.canAccess)
    {
      this.router.navigate(['']).then();
      return this.canAccess = false;
    }
    else
    {
      this.router.navigate(['private']).then();
      return this.canAccess = true;
    }
  }
}
