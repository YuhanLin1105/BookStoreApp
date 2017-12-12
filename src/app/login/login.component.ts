import { IUserLogin, ITokenApiResponse } from './../shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: IUserLogin = {
    grant_type: 'password',
    username: '',
    password: ''
  };

  tokenResponse: ITokenApiResponse;
  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  login() {

    this._authService.login(this.credentials)
      .subscribe((response: ITokenApiResponse) => {

        if (response) {
          this.tokenResponse = response;
          // console.log(response);
          // console.log(this.tokenResponse.access_token);
        }

      },
      (err: any) => console.log(err));
    // console.table(this.credentials);
    // console.log(this.tokenResponse.access_token);
    // console.table(this.tokenResponse);
  }
}
