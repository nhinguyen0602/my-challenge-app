import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LoginComponent } from './page/login/login.component';
import { SharedModule } from './shared/shared.module';
import { LoginRoutingModule } from './page/login/login-routing.module';
import { NzMessageService } from 'ng-zorro-antd';
import { BookComponent } from './page/book/book.component';
import { CharacterComponent } from './page/character/character.component';
import { BookDetailComponent } from './page/book-detail/book-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CharacterDetailComponent } from './page/character-detail/character-detail.component';
import { HouseComponent } from './page/house/house.component';
import { HttpErrorInterceptor } from './interceptors/error-handler.interceptor';
import { HouseDetailComponent } from './page/house-detail/house-detail.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookComponent,
    CharacterComponent,
    BookDetailComponent,
    CharacterDetailComponent,
    HouseComponent,
    HouseDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    LoginRoutingModule,
    Ng2SearchPipeModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, NzMessageService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
