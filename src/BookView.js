import React, { Component } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { Colors } from "@res";
import { scale } from "@utils";
export class BookView extends Component {
    render() {
        let book = this.props.book;
        return (
            <TouchableOpacity onPress={this.props.onPress}>
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

                        <Text style={styles.bookDescription} numberOfLines={3}>
                            {book.description}
                        </Text>
                        <Text style={styles.bookCategory}>
                            Category: {book.category}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    bookCard: {
        flex: 1,
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
    }
});
