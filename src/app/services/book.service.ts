import { ActivatedRoute } from '@angular/router';
import { IUserLogin, ITokenApiResponse } from './../shared/interfaces';
import { ICategory } from './../shared/Category';
import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { IBook } from '../shared/Book';

@Injectable()
export class BookService {

  private _bookUrl = 'http://localhost:57347/api/books';
  constructor(private _http: HttpClient) { }

  insertBook(book: IBook): Observable<IBook> {
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    };
    return this._http.post<IBook>(this._bookUrl, book, options)
      // .map(response => { })
      .catch(this.handleError);
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
