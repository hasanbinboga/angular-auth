import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStatusEnum } from 'src/app/shared/enums/api-status.enum';
import { ApiRequest } from 'src/app/shared/interfaces/api-request.interface';
import { ApiResult } from 'src/app/shared/interfaces/api-result.interface';
import { AuthToken } from 'src/app/shared/interfaces/auth-token.interface';
import { environment } from '../../../../environments/environment'; 
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.email],
    password: ['', Validators.required],
  }); 
  loginResponse: any;
  loginButtonDisabled = false;
  currentUser: ApiResult<AuthToken> = { data : {userGrup:0, token:""}, status : ApiStatusEnum.error, error:""  };

  constructor(
    private accountService: AccountService, 
    public router: Router, 
    public formBuilder: FormBuilder,
    public route: ActivatedRoute, 
  ) { }

  ngOnInit() { 
  }

 
 

  async onSubmit(isResend: boolean = false) {

    this.loginButtonDisabled = true;
    
    const data = this.loginForm.getRawValue() as ApiRequest; 
    
    this.accountService.login(data).subscribe(result => {
      this.loginButtonDisabled = false;

      if (this.checkResult(result)) {
        this.loginResponse = result.data; 
      } else {
        localStorage.removeItem('auth_token');
      }
    });
  }

  
  checkResult(result: ApiResult<AuthToken>): boolean {
    let checkResult = true;

    if (result.status === ApiStatusEnum.error) {
      alert(result.error);
      checkResult = false;
    }
    return checkResult;
  }
    
  setLocalData(result: ApiResult<AuthToken>) {
  
    localStorage.setItem('user_info', JSON.stringify(result.data));
      
    this.router.navigate(['/']);
    //kurumsal portal için ek güvenlik
     {
      
      

      // CommonHelper'daki global CurrentUser'a dönen sonuç tek bir sefer login olurken setleniyor.
      this.setCurrentUser(result);

    }
    
  }

  setCurrentUser(result: ApiResult<AuthToken>) {
    const val:any = localStorage.getItem('user_info') == null ? "": localStorage.getItem('user_info');
    if (this.isNullOrUndefined(val) || this.isNullOrWhiteSpace(val)) {
      return;
    }

    this.currentUser = JSON.parse(val) as ApiResult<AuthToken>;
    return this.currentUser;
  }

  resend() {
    this.onSubmit(true);
  }


  isNullOrUndefined(obj: any) {
    if (obj === undefined || obj === null || obj === '' || obj === ' ') {
      return true;
    } else {
      return false;
    }
  }

  isNullOrWhiteSpace(text: any) {
    if (typeof (text) === 'number' && text.toString() === '') {
      return true;
    } else if (typeof (text) === 'number' && text.toString() !== '') {
      return false;
    } else if (text instanceof Array && text.length === 0) {
      return true;
    } else if (text instanceof Array && text.length > 0) {
      return false;
    }
    return (typeof text === 'undefined' || text == null) || text.replace(/\s/g, '').length < 1;
  }
}
