import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {delay, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: boolean = false;

  constructor() {
  }

  login(username: string, password: string): Observable<any> {
    console.log(username);
    console.log(password);
    this.isUserLoggedIn = username == 'admin' && password == 'admin';
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {
        console.log("User Authentication is successful: " + val);
      })
    );
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }

}
