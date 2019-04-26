import * as Books from "@res/books.json";
export class APIService {
    static fetchAllBooks() {
        console.log("fetchAllBooks)", Books);
        return Books;
    }
    static borrowBook(book) {
        console.log("borrowBook(book)", book);
        book.borrowed = true;
        return book;
    }
    static returnBook(book) {
        console.log("returnBook(book)", book);
        book.borrowed = false;
        return book;
    }
    static searchBook(query) {
        console.log("searchBook(query)", query);
    }
    static onAPICallStart() {}
    static onAPICallFinish() {}
}
