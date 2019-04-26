/**
 * @format
 */

import "react-native";
import React from "react";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import { BookDetailsScreen } from "../src/BookDetailsScreen";

it("BookDetailsScreen should render correctly", () => {
    renderer.create(<BookDetailsScreen />);
});
