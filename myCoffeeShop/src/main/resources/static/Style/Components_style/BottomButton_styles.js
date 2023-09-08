import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR, DARK_GREEN} from "../../Help_Box/Colors";

export const bottomButton_styles = StyleSheet.create({
    container: {
        height: 80,
        width: "100%",
        paddingTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    containerButton: {
        height: "100%",
        width: "90%",
        padding: 10,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: DARK_GREEN,
    },

    text: {
        fontSize: 36,
        color: "white",
    }

});