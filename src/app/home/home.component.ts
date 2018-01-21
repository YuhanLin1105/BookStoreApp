import { ActivatedRoute } from '@angular/router';
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
  books: IBook[] = [];
  filteredBooks: IBook[];
  categories: ICategory[];
  categoryId: string;

  ngOnInit() {

    let test = this.route.params.subscribe(params => {
      const term = params['categoryId'];
      console.log(term);
    //  this.service.get(term).then(result => { console.log(result); });
    });
  }

  // Inject activatedroute so that we can read route parameters
  constructor(private route: ActivatedRoute, private bookService: BookService, private categoryService: CategoryService) {
    this.bookService.getAll()
      .subscribe(
      books => {
        this.books = books;
        route.queryParamMap.subscribe(params => {
          this.categoryId = params.get('categoryId');

          if (this.categoryId != null) {
            this.bookService.getBooksByCategory(this.categoryId)
              .subscribe(
              filteredbooks => {
              //  console.log(this.categoryId);
                this.books = (this.categoryId != null) ? filteredbooks : this.books;
              }
              );
          }
        });
      }
      );

    this.categoryService.getAll()
      .subscribe(
      categories => {
        this.categories = categories;
      }
      );
  }

}
