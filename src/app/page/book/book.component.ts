import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/model/book';
import { BookService } from 'src/app/service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public books: Book[];
  searchText;

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem('currentUser')){
      this.router.navigate(['login']);
    }
    this.getBooks();
  }

  private getBooks(){
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  public selectBook(url){
    this.router.navigate(['book-detail', url.split('/').slice(-1).pop()]);
  }

}
