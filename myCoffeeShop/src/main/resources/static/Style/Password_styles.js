import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR} from "../Help_Box/Colors";

export const password_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
        paddingTop: 50,
        padding: 10,
        alignItems: "center",
    },

    containerUp: {
        flex: 2,
        width: "100%",
        justifyContent: "space-around",
    },

    textContainer: {
        alignItems: "center",
        justifyContent: "center",
    },

    bigText: {
        fontSize: 36,
    },

    text: {
        fontSize: 24,
    },

    containerDown: {
        flex: 1.2,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});