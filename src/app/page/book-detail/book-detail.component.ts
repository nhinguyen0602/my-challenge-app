import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/model/book';
import { BookService } from 'src/app/service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  public book: Book;
  private url: string;
  public isLoading = true;
  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBookDetail();
  }

  getBookDetail(){
    this.url = this.bookService.bookUrl + this.router.url.split(`/`).slice(-1).pop();
    this.bookService.getBookDetail(this.url).subscribe(book => {
      this.book = book;
      this.isLoading = false;
    });
  }

}
