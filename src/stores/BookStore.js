import { observable, action } from "mobx";

export default class BookStore {
    @observable books = [];
    @action loadBooks() {
        fetch("http://www.mocky.io/v2/5cb44b7e330000921711b93a")
            .then(response => response.json())
            .then(responseJson => {
                responseJson.books.forEach(element => {
                    this.books.push(element);
                });
                console.log("loadBooks.success");
            })
            .catch(error => {
                console.error("loadBooks.error", error);
            });
    }
}
