import React, { Component } from "react";
import { StyleSheet, Image, Text, View, Button } from "react-native";
import { Colors } from "@res";
import { scale } from "@utils";
import { APIService } from "@services";
import ReadMore from "react-native-read-more-text";

export class BookDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { book: this.props.navigation.state.params.book };
    }
    onButtonClicked = () => {
        let book = null;
        if (this.state.book.borrowed) {
            book = APIService.returnBook(this.state.book);
        } else {
            book = APIService.borrowBook(this.state.book);
        }
        this.setState({ book: book });
    };
    render() {
        let book = this.state.book;
        return (
            <View style={styles.container}>
                <View style={styles.bookCard}>
                    <Image
                        source={{ uri: book.image }}
                        style={styles.bookImage}
                    />
                    <View style={styles.bookContent}>
                        <Text style={styles.bookTitle} numberOfLines={2}>
                            {book.name}
                        </Text>
                        <Text style={styles.bookAuthor} numberOfLines={1}>
                            By {book.author}
                        </Text>
                        <Text style={styles.bookCategory}>
                            Category: {book.category}
                        </Text>
                    </View>
                </View>
                <ReadMore
                    numberOfLines={3}
                    onReady={this._handleTextReady}
                    renderTruncatedFooter={this._renderTruncatedFooter}
                    renderRevealedFooter={this._renderRevealedFooter}
                >
                    <Text style={styles.bookDescription}>
                        {book.description}
                    </Text>
                </ReadMore>
                <Button
                    title={book.borrowed ? "Return" : "Borrow"}
                    style={styles.button}
                    onPress={this.onButtonClicked}
                />
            </View>
        );
    }
    _handleTextReady = () => {
        console.log("ready!");
    };
    _renderTruncatedFooter = handlePress => {
        return (
            <Text
                style={{ color: Colors.blue, marginTop: 3 }}
                onPress={handlePress}
            >
                Read more
            </Text>
        );
    };

    _renderRevealedFooter = handlePress => {
        return (
            <Text
                style={{ color: Colors.blue, marginTop: 3 }}
                onPress={handlePress}
            >
                Show less
            </Text>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginHorizontal: scale(10)
    },
    bookCard: {
        flexDirection: "row",
        padding: scale(5)
    },
    bookContent: {
        flexDirection: "column",
        paddingHorizontal: scale(10)
    },
    bookTitle: {
        fontSize: scale(15),
        fontWeight: "bold",
        color: Colors.title,
        marginBottom: scale(3)
    },
    bookAuthor: {
        fontSize: scale(15),
        color: Colors.title,
        marginBottom: scale(3)
    },
    bookDescription: {
        fontSize: scale(14),
        color: Colors.description,
        flexWrap: "wrap",
        marginBottom: scale(3)
    },
    bookCategory: {
        fontSize: scale(12),
        color: Colors.title
    },
    bookImage: {
        width: scale(120),
        height: scale(150)
    },
    button: {
        marginTop: scale(30)
    }
});
