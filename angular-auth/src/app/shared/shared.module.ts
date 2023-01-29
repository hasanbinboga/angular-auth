import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeTr from '@angular/common/locales/tr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

registerLocaleData(localeTr, 'tr');

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  declarations: [ 
  ],
  exports: [
    FormsModule,
    CommonModule,
    HttpClientModule 
  ], 
   
})
export class ShareddModule { }
