import React, { Component } from "react";
import { BookList } from "./BookList";
import { observer, inject } from "mobx-react/native";
@inject("bookStore")
@observer
export class BooksListScreen extends Component {
    constructor(props) {
        super(props);
        console.log("BookListScreen.props()", this.props);
        this.state = { books: [] };
    }
    componentDidMount() {
        if (this.props.bookStore) {
            this.props.bookStore.loadBooks();
        }
    }
    render() {
        console.log("Render BooksListScreen", this.props);
        return <BookList books={this.props.bookStore.books} />;
    }
}
