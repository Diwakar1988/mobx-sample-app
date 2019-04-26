/**
 * @format
 */

import "react-native";
import React from "react";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import { BooksListScreen } from "../src/BooksListScreen";

it("BooksListScreen should render correctly", () => {
    renderer.create(<BooksListScreen />);
});
