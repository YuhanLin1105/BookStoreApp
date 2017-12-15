import { IUserLogin, ITokenApiResponse } from './../shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;

  credentials: IUserLogin = {
    // grant_type: 'password',
    username: '',
    password: ''
  };

  tokenResponse: ITokenApiResponse;
  // token: string;
  constructor(private router: Router,
    private _authService: AuthService) { }

  ngOnInit() {
  }

  login() {

    this._authService.login(this.credentials)
      .subscribe((response) => {

        if (response) {
          // this.token = response;
          this.router.navigate(['/']);
          console.log(response);
          // console.log(this.tokenResponse.access_token);
        }

        // tslint:disable-next-line:one-line
        else {
          this.invalidLogin = true;

        }

      },
     // (err: any) => console.log(err));
      (err: any) => this.invalidLogin = true);

    // console.table(this.credentials);
    // console.log(this.tokenResponse.access_token);
    // console.table(this.tokenResponse);
  }
}
