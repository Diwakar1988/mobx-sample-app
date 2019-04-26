/**
 * @format
 */

import "react-native";
import React from "react";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import { BookView } from "../src/BookView";

it("BookView should render correctly", () => {
    let Book = {
        id: 1,
        name: "Book",
        author: "Author",
        description: "description",
        image:
            "https://di2ponv0v5otw.cloudfront.net/posts/2018/07/29/5b5e6e5fc61777cf1f95a3d8/m_5b5e6e7afb38038b6f14cbb3.jpg",
        category: "biography",
        borrowed: false
    };
    renderer.create(<BookView book={Book} />);
});
