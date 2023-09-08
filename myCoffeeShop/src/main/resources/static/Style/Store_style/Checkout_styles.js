import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR, DARK_GREEN} from "../../Help_Box/Colors";

export const checkout_styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        padding: 10,
        backgroundColor: BACKGROUND_COLOR,
        alignItems: 'center',
    },

    containerUp: {
        flex: 1.4,
        width: "100%",
        alignItems: "center",
    },

    containerCard: {
        flex: 1,
        width: "80%",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "white"
    },

    priceBox: {
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        fontSize: 32,
        color: DARK_GREEN,
    },

    text: {
        fontSize: 20,
        color: "black",
    },

    logo: {
        height: 150,
        width: 150,
    },

    line: {
        height: 3,
        width: "95%",
        alignSelf: "center",
        backgroundColor: DARK_GREEN,
    },

    containerDown: {
        flex: 1,
        width: "100%",
    },

    containerScrollView: {
        flexGrow: 1,
        width: "100%",
        paddingTop: 20,
    },

});