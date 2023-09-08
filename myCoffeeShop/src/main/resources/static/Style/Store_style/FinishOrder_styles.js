import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR, DARK_GREEN} from "../../Help_Box/Colors";

export const finishOrder_styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        padding: 10,
        backgroundColor: BACKGROUND_COLOR,
        alignItems: 'center',
    },

    containerUp: {
        width: "100%",
    },

    containerUpText: {
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    backIcon: {

    },

    title: {
        fontSize: 24,
    },

    text: {
        fontSize: 20,
        color: "white",
    },

    logo: {
        height: 60,
        width: 60,
    },

    orderButton: {
        height: 40,
        width: "90%",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: DARK_GREEN,
    },

    blackLine: {
        height: 3,
        width: "95%",
        alignSelf: "center",
        backgroundColor: "black",
    },

    tabContainer: {
        // backgroundColor: "red"
        flexDirection: "row",
    },

    tabTextContainer: {
        alignItems: "center",

    },

    line: {
        height: 3,
        width:100,
    },

    containerScrollView: {
        flexGrow: 1,
        width: "100%",
        paddingTop: 20,
    },

});