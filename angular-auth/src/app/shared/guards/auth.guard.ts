import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AccountService } from '../../account/services/account.service'; 

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( ) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {

    if (!this.isLoggedIn()) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      window.location.href = (this.getUiUrl() + '/account/login');
      return false;
    }
    else {
      return true;
    }
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('auth_token');
    if (this.isNullOrUndefined(token)) {
      return false;
    } 
    return true;
  }

  
  isNullOrUndefined(obj: any) {
    if (obj === undefined || obj === null || obj === '' || obj === ' ') {
      return true;
    } else {
      return false;
    }
  }

  getUiUrl() {
    return environment.uiUrl;
  }
}


