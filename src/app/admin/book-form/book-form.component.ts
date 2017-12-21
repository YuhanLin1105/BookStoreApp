import { Book } from './../../shared/Book';
import { Category } from './../../shared/Category';

import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  categories: Category[];
  private book: Book;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(
        categories => {
            this.categories = categories;
        }

      );

      console.table(this.categories);
  }
  submitBook() {

  }
}
