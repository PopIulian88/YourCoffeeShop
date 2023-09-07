import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR, DARK_GREEN} from "../../Help_Box/Colors";

export const stockComponent_styles = StyleSheet.create({
    container: {
        height: 180,
        width: "95%",
        justifyContent: "space-between"
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
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        fontSize: 24,
    },

    text: {
        fontSize: 16,
        color: DARK_GREEN,
    },

    containerButton: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

});