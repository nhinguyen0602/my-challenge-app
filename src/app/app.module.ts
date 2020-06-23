import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LoginComponent } from './page/login/login.component';
import { SharedModule } from './shared/shared.module';
import { LoginRoutingModule } from './page/login/login-routing.module';
import { NzMessageService } from 'ng-zorro-antd';
import { HomepageComponent } from './page/homepage/homepage.component';
import { BookComponent } from './page/book/book.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    LoginRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, NzMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
