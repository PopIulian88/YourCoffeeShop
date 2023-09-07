import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR, DARK_GREEN} from "../../Help_Box/Colors";

export const shop_styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        padding: 10,
        backgroundColor: BACKGROUND_COLOR,
        alignItems: 'center',
    },

    containerUp: {
        flex: 2,
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
        fontSize: 28,
        fontWeight: "bold",
    },

    leaveButton: {
        alignItems: "flex-end",
        justifyContent: "center",
    },

    icon: {

    },

    roofPhoto: {
        flex: 1,
        width: "100%",
        resizeMode: "contain",
    },

    containerMid: {
        flex: 4,
        width: "100%",
        alignItems: "center",
    },

    tableLine: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    containerDown: {
        flex: 0.8,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
    },

    line: {
        height: 3,
        width: "95%",
        backgroundColor: DARK_GREEN,
    },

    text: {
        fontSize: 18,
        textAlign: 'center',
    },
});