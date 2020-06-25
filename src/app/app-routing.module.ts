import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './page/book/book.component';
import { CharacterComponent } from './page/character/character.component';
import { BookDetailComponent } from './page/book-detail/book-detail.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/books' },
  { 
    path: 'books',
    component: BookComponent
  },
  { 
    path: 'characters',
    component: CharacterComponent
  },
  { 
    path: 'book-detail/:id',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
