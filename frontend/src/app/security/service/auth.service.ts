import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {v4 as uuidv4} from "uuid";
import {Router} from "@angular/router";
import {Credential} from "../../shared/credential/credential";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  username: string = 'benoit.titeux@protonmail.com';
  password: string = 'Soleil2022';
  randomToken = uuidv4();

  constructor(private router: Router) {
  }

  login(username: string, password: string): Observable<any> {
    if (username == this.username && password == this.password) {
      localStorage.setItem('token', this.randomToken);
      return of(new HttpResponse({status: 200}));
    } else {
      return of(new HttpResponse({status: 401}));
    }
  }


  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['']).then();
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }
}

