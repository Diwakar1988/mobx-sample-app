import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { BooksListScreen } from "./src/BooksListScreen";
import { BookDetailsScreen } from "./src/BookDetailsScreen";
import { Colors, RouteName } from "@res";
import { scale } from "@utils";
import stores from "./src/stores";
import { Provider } from "mobx-react/native";
export default class App extends Component {
    render() {
        return (
            <Provider {...stores}>
                <View style={{ flex: 1 }}>
                    <StatusBar
                        barStyle="dark-content"
                        hidden={false}
                        backgroundColor={Colors.white}
                        translucent={false}
                        networkActivityIndicatorVisible={true}
                    />
                    <AppNavigator />
                </View>
            </Provider>
        );
    }
}

export const AppNavigator = createStackNavigator(
    {
        [RouteName.BOOK_LIST]: {
            screen: BooksListScreen,
            navigationOptions: { header: null }
        },
        [RouteName.BOOK_DETAILS]: {
            screen: BookDetailsScreen,
            navigationOptions: { title: "Book Detail" }
        }
    },
    {
        initialRouteName: RouteName.BOOK_LIST,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: Colors.black,
            headerTitleStyle: {
                fontSize: scale(15),
                fontWeight: "bold"
            }
        },
        gesturesEnabled: false,
        cardStyle: { backgroundColor: "#FFFFFF" }
    }
);
