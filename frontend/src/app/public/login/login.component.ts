import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../security/service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  signInForm!: FormGroup;

  constructor(private authService: AuthService, public router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.signInForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    });
  }

  loginUser() {
    this.username = this.signInForm.value.username;
    this.password = this.signInForm.value.password;

    this.authService.login(this.username, this.password)
      .subscribe(data => {
        if (data) this.router.navigate(['dashboard']);
      });
  }
}
