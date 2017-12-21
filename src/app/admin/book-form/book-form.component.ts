import { ICategory } from './../../shared/interfaces';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  categories: ICategory[];

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

}
