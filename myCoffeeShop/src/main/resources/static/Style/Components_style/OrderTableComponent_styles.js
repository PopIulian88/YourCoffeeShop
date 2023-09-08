import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR, DARK_GREEN, LITE_GREEN, MY_GRAY, MY_RED} from "../../Help_Box/Colors";

export const orderTableComponent_styles = StyleSheet.create({
    container: {
        height: 190,
        width: "95%",
    },

    containerCard: {
        height: 140,
        width: "100%",
        flexDirection: "row",
        borderRadius: 20,
        backgroundColor: "white"
    },

    leftCard: {
        flex: 2,
        padding: 10,
        alignItems: "flex-start",
        justifyContent: "center",
    },

    rightCard: {
        flex: 1.2,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        height: "100%",
        width: "100%",
        borderRadius: 20,
    },

    title: {
        fontSize: 24,
    },

    text: {
        fontSize: 16,
        color: DARK_GREEN,
    },

    conainerButtons: {
        height: 50,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    plusButton: {
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: DARK_GREEN,
    },

    counterView: {
        height: 50,
        width: 100,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: MY_GRAY,
    },

    textCounter: {
        fontSize: 24,
        color: "white",
    },

    minusButton: {
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: MY_RED,
    },

    addToCartButton: {
        height: 50,
        width: 100,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: DARK_GREEN,
    },

    addToCartText: {
        fontSize: 16,
        color: "white",
        textAlign: "center",
    },
});