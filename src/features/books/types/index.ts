export interface Book {
  isbn: string;
  title: string;
  subtitle: string;
  author: string;
  published: string;
  publisher: string;
  pages: number;
  description: string;
  website: string;
  rating: number;
  thumb: string;
  categories: Category[];
}

export type Category = string;

export type BookCollection = Book[];
