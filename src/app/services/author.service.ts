import { HttpClient } from '@angular/common/http';
import { IAuthor } from './../shared/interfaces';
import { Injectable } from '@angular/core';
import { AbstractRestService } from './abstract.rest.service';

@Injectable()
export class AuthorService extends AbstractRestService<IAuthor> {

  constructor(http: HttpClient, url: string) {
    super(http, url + 'author/');

  }
}
