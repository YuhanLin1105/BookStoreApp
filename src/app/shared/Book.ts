import { ICategory } from './Category';
export interface IBook {
    title: string;
    description: string;
    price: number;
    copies: number;
    edition: number;
    isbn: string;
    url: string;
    authorId: number;
    publishedDate: number;
    pages: number;
    publishingCompany: string;
    rating: number;
    categories: ICategory[];
}
