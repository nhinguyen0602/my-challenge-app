import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule,NzFormModule,ReactiveFormsModule,NzBadgeModule,NzCollapseModule,NzEmptyModule],
  exports: [
  ]
})
export class AppMaterialModule {
}
