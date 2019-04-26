import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Colors, RouteName } from "@res";
import { scale } from "@utils";
import { BookView } from "./BookView";
import { observer } from "mobx-react/native";
@observer
export class BookList extends Component {
    constructor(props) {
        super(props);
        console.log("BookList", this.props);
    }
    render() {
        console.log("Render BookList", this.props);
        return (
            this.props.books &&
            this.props.books.length > 0 && (
                <FlatList
                    data={this.props.books}
                    renderItem={item => this.renderBookRow(item)}
                    keyExtractor={book => `book_${book.id}`}
                />
            )
        );
    }
    renderBookRow = item => {
        let book = item.item;
        return (
            <View style={styles.listItem}>
                <BookView
                    book={book}
                    onPress={() => this.onBookClicked(book)}
                />
            </View>
        );
    };
    onBookClicked = book => {
        this.props.navigation.navigate(RouteName.BOOK_DETAILS, { book: book });
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listItem: {
        elevation: 3,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: Colors.white,
        borderRadius: 5,
        marginHorizontal: scale(10),
        marginVertical: scale(5)
    }
});
