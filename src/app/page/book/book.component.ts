import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/shared/model/book';
import { BookService } from 'src/app/service/book.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() listBookUrls: string[] = [];

  public books: Book[];
  public searchText;
  public isLoading = false;

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
    this.isLoading = true;
    if (this.listBookUrls && this.listBookUrls.length){
      const listQuery = this.listBookUrls.map(url => this.bookService.getBookDetail(url));
      forkJoin(listQuery).subscribe(results => {
           this.books = results;
          }
        );
    }
    else{
      this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }
    this.isLoading = false;
  }

  public selectBook(url){
    this.router.navigate(['book-detail', url.split(`/`).slice(-1).pop()]);
  }

}
