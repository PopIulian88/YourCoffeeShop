import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR} from "../Help_Box/Colors";

export const welcome_styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 50,
        padding: 10,
        backgroundColor: BACKGROUND_COLOR,
    },

    containerUp: {
        height: "96%",
        alignItems: "center",
    },

    photoLogo: {
        height: 180,
        width: 180,
    },

    textContainer: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    textWelcome: {
        fontSize: 24,
        fontWeight: "bold",
    },

    text: {
        fontSize: 16,
        textAlign: 'center',
    },

    buttonContainer: {
        flex: 3,
        justifyContent: "center",
    },

    containerDown: {
        height: "4%",
        alignItems: "center",
        justifyContent: "center",
    },

    contactText: {
        fontSize: 16,
    },


});