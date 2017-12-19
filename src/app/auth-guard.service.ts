import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate() {
    if (this.auth.isLoggedIn())
    // tslint:disable-next-line:one-line
    {
      return true;
    }
    // navigate user to login page
    this.router.navigate(['/login']);
    return false;
  }

  constructor(private auth: AuthService, private router: Router) {


  }

}
