import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {delay, tap} from "rxjs/operators";
import {HttpResponse} from "@angular/common/http";
import { v4 as uuidv4 } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //isUserLoggedIn: boolean = false;

  username: string = 'usertest@protonmail.com';
  password: string = 'Soleil';
  randomToken = uuidv4();

  constructor() {
  }

  // First attempt!
/*
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
*/

// second attempt !

  login(username: string, password: string): Observable<any> {
    if (username == this.username && password == this.password) {
      localStorage.setItem('token', this.randomToken);
      console.log(localStorage.getItem('token'));
      return of(new HttpResponse({ status: 200 }));
    } else {
      return of(new HttpResponse({ status: 401 }));
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem('token') != null) {
      return true;
    }
    return false;
  }

}
