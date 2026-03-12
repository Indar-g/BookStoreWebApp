import axios from "axios";
import { Author } from "./authors";
import { Book } from "./books";

interface SearchBooksResponse {
    booksData: Book[] | null;
}
interface GetAuthorsResponse {
    authorsData: Author[] | null;
}

export const GetAllBooks = async () => {
    try {
        const booksData = await axios.get<SearchBooksResponse>(`http://localhost:5088/api/books`);

        return booksData;
    } catch (error: any) {
        console.log("error message from API: ", error.message);
    }
}

export const SearchBooksByTitle = async (query: string) => {
    try {
        const booksData = await axios.get<SearchBooksResponse>(`http://localhost:5088/api/books?Title=${query}`);
        return booksData;
    } catch (error: any) {
       console.log("error message: ", error.message);
    }
}

export const SearchBooksByGenre = async (query: string) => {
    try {
        const booksData = await axios.get<SearchBooksResponse>(`http://localhost:5088/api/books?Genre=${query}`);
        return booksData;
    } catch (error: any) {  
        console.log("error message: ", error.message);
    }
}

export const getBookByTitle = async (query: string) => {
    try {
        const booksData = await axios.get<Book>(`http://localhost:5088/api/books/GetByTitle?title=${query}`);

        return booksData.data;
    } catch(error: any) {
        console.log("error message from API: ", error.message);
    }
}

export const GetAllAuthors = async () => {
    try {
        const authorsData = await axios.get<GetAuthorsResponse>(`http://localhost:5088/api/authors`);
        return authorsData;
    } catch (error: any) {
        console.log("error message from API: ", error.message);
    }
}

