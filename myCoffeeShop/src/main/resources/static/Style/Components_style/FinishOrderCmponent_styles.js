import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR, DARK_GREEN} from "../../Help_Box/Colors";

export const finishOrderComponent_styles = StyleSheet.create({
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
        flex: 1.2,
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

    image: {
        height: "100%",
        width: "100%",
        borderRadius: 20,
    },

    containerButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    amountText: {
        paddingLeft: 20,
        fontSize: 24,
        color: DARK_GREEN,
    }

});