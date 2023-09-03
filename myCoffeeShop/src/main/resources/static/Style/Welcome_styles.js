import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR} from "../Colors";

export const welcome_styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    containerUp: {
        height: "96%",
        backgroundColor: BACKGROUND_COLOR,
        paddingTop: 50,
        padding: 10,
        alignItems: "center",
    },

    photoLogo: {
        height: 180,
        width: 180,
    },

    textContainer: {
        padding: 20,
        alignItems: "center",
    },

    textWelcome: {
        fontSize: 24,
        fontWeight: "bold",
    },

    text: {
        fontSize: 16,
        textAlign: 'center',
    },

    containerDown: {
        height: "4%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: BACKGROUND_COLOR,
    },

    contactText: {
        fontSize: 16,
    },


});