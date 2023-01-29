import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiResult } from '../interfaces/api-result.interface';
import { AuthToken } from '../interfaces/auth-token.interface';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor( ) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {

    if (!this.isLoggedIn()) {
      window.location.href = ('/account/login');
      return false;
    }
    else {
      return true;
    }
  }

  isLoggedIn(): boolean {
    const token: string = localStorage.getItem('auth_token') || '{}'; 
    
    if (this.isNullOrUndefined(token)) {
      return false;
    } 

    try {
      const currentUser = JSON.parse(token) as ApiResult<AuthToken>;
      if(this.isNullOrUndefined(currentUser)){
        return false;
      }
    } catch (error) {
      return false;
    }
    
    return true;
  }


  
  isNullOrUndefined(obj: any) {
    if (obj === undefined || obj === null || obj === '' || obj === ' ') {
      return true;
    } 
    else {
      return false;
    }
  } 
}


