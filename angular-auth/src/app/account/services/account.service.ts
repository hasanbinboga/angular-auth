import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiRequest } from 'src/app/shared/interfaces/api-request.interface';
import { ApiResult } from 'src/app/shared/interfaces/api-result.interface';
import { AuthToken } from 'src/app/shared/interfaces/auth-token.interface';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AccountService{
  accountControllerName = 'Account';
  loginMethodName = 'Login';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
  }

  login(model: ApiRequest): Observable<ApiResult<AuthToken>>{
    
    return this.post<AuthToken>(this.accountControllerName, this.loginMethodName, model);
  }

  post<T>(controllerName: string, methodName: string, postedObject: any): Observable<ApiResult<T>> {
    
    return this.http.post<ApiResult<T>>(environment.apiUrl + controllerName + '/' + methodName, postedObject);
  }
}
