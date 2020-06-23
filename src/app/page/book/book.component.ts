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

  books: Book[]
  searchText;

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.bookService.getBooks().subscribe(books => this.books = books)
  }

  selectBook(data){
    localStorage.setItem('bookCurrent',data.url);
    this.router.navigate(['book-detail'])
  }

}
