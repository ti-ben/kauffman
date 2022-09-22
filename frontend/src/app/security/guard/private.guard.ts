import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivateGuard implements CanActivate {

  public constructor(public router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const canAccess: boolean = true;

    if (canAccess) {
      alert('passed can access');
      this.router.navigate(['']).then();
    }
    return canAccess;
  }

}
