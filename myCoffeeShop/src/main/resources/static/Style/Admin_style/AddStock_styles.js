import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR, DARK_GREEN} from "../../Help_Box/Colors";

export const addStock_styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        padding: 10,
        paddingBottom: 0,
        backgroundColor: BACKGROUND_COLOR,
        alignItems: 'center',
    },

    containerHeader: {
        height: 50,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    backIcon: {

    },

    textHeader: {
        fontSize: 32,
    },

    containerScrollView: {
        flexGrow: 1,
        width: "100%",
        paddingTop: 20,
    },

    containerTextImput: {
        width: "95%",
    },

    text: {
        paddingLeft: 10,
        fontSize: 20,
    },

    inputBox: {
        height: 50,
        width: "100%",
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },

});