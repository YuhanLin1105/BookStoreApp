import { Category } from './Category';
export class Book {
    title: string;
    description: string;
    price: number;
    copies: 35;
    edition: 3;
    isbn: string;
    url: string;
    authorId: number;
    publishedDate: Date;
    pages: number;
    publishingCompany: string;
    rating: number;
    categories: Category[];
}