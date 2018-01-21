import { CategoryService } from './../services/category.service';
import { IBook } from './../shared/Book';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BookService } from '../services/book.service';
import { ICategory } from '../shared/Category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: IBook[];
  categories: ICategory[];
  ngOnInit() {

    this.bookService.getAll()
      .subscribe(
      books => {
        this.books = books;
      }
      );

    this.categoryService.getAll()
      .subscribe(
      categories => {
        this.categories = categories;
      }
      );
  }

  constructor(private bookService: BookService, private categoryService: CategoryService) {


  }

}
