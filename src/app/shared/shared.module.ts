import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzBadgeModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NzBadgeModule
  ]
})
export class SharedModule { }
