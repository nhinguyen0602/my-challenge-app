import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';
import { BookComponent } from './page/book/book.component';
import { CharacterComponent } from './page/character/character.component';
import { BookDetailComponent } from './page/book-detail/book-detail.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/homepage' },
  { 
    path: 'homepage',
    component: HomepageComponent
  },
  { 
    path: 'books',
    component: BookComponent
  },
  { 
    path: 'characters',
    component: CharacterComponent
  },
  { 
    path: 'book-detail',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
