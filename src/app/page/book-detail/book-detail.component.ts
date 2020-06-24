import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book
  url: string
  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.getBookDetail()
  }

  getBookDetail(){
    this.url = localStorage.getItem('bookCurrent')
    this.bookService.getBookDetail(this.url).subscribe(book => this.book = book)
  }

}
