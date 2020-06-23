import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';
import { BookComponent } from './page/book/book.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/homepage' },
  { 
    path: 'homepage',
    component: HomepageComponent
  },
  { 
    path: 'books',
    component: BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
