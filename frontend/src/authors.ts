import { Book } from "./books";

export interface Author {
    id: string;
    name: string;
    books: Book[];
}