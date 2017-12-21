import { IBook } from './../../shared/Book';
import { ICategory } from './../../shared/Category';

import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  categories: ICategory[];
  book: IBook = {
    title: '',
    description: '',
    price: null,
    copies: null,
    edition: null,
    isbn: '',
    url: '',
    authorId: null,
    publishedDate: null,
    pages: null,
    publishingCompany: '',
    rating: null,
    categories: []
  };

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(
      categories => {
        this.categories = categories;
        // console.log(this.categories);
        // console.table(this.categories);
      }

      );


  }
  submitBook() {
     this.book.categories = this.selectedOptions;
     console.table(this.book);
  }

  get selectedOptions() {
    console.log(this.categories);
    return this.categories
      .filter(opt => opt.isChecked);
    // .map(opt => opt.id);
  }
}
