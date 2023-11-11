import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR, DARK_GREEN} from "../../Help_Box/Colors";

export const stock_styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        padding: 10,
        paddingBottom: 0,
        backgroundColor: BACKGROUND_COLOR,
        alignItems: 'center',
    },

    containerUp: {
        width: "100%",
    },

    containerUpText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    logo: {
        height: 60,
        width: 60,
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",

    },

    plusIcon: {

    },

    undertitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    inputBox: {
        flex: 1,
        height: 50,
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },

    placeholderStyle: {
        fontSize: 16,
    },

    selectedTextStyle: {
        fontSize: 16,
    },

    inputSearchStyle: {
        fontSize: 16,
    },

    iconStyle: {
        height: 30,
        width: 30,
    },

    containerScrollView: {
        flexGrow: 1,
        width: "100%",
        paddingTop: 20,
    },

    addStock: {
        height: 60,
        width: 60,
        backgroundColor: DARK_GREEN,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },


});