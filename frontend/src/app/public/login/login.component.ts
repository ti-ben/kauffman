import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../security/service/auth.service";
import {Credential} from "../../shared/credential/credential";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credential: Credential = new Credential();
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
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(7)])
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
