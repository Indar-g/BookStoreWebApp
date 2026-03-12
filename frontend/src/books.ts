import { Review } from "./reviews";

export interface Book {
    id: string;
    title: string;
    genre: string;
    description: string;
    price: number; 
    bookimage: string;
    authorname: string;
    reviews: Review[];
}