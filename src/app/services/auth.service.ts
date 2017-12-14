import { IUserLogin, ITokenApiResponse } from './../shared/interfaces';
import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';

@Injectable()
export class AuthService {

  private _authUrl = 'http://localhost:57347/api/token';
  constructor(private _http: HttpClient) {

  }

  login2(userLogin: IUserLogin): Observable<ITokenApiResponse> {

    const body = new URLSearchParams();
    body.set('username', userLogin.username);
    body.set('password', userLogin.password);
    body.set('grant_type', 'password');
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    // console.table(userLogin);
    return this._http.post<ITokenApiResponse>(this._authUrl, body.toString(), options)
      .catch(this.handleError);
  }

  login(userLogin: IUserLogin): Observable<string> {

    const body = new URLSearchParams();
    body.set('username', userLogin.username);
    body.set('password', userLogin.password);
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    // console.table(userLogin);
    return this._http.post<string>(this._authUrl, body.toString(), options)
      .map(response => {
        if (response) {
          localStorage.setItem('token', response);
          return true;
        }
        return false;
      })
      .catch(this.handleError);
  }

  logout() {

  }
  isLoggedIn() {
    return false;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Server error');
  }
}
