import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR, DARK_GREEN} from "../../Help_Box/Colors";

export const profile_styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        padding: 10,
        paddingBottom: 0,
        backgroundColor: BACKGROUND_COLOR,
        alignItems: 'center',
    },

    containerHeader: {
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 10,
    },

    leftHeader: {
        flex: 4,
        flexDirection: "row",
        alignItems: "center",
    },

    title: {
        fontSize: 24,
        padding: 10,
    },

    icon: {

    },

    rightHeader: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
    },

    containerUp: {
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 10,
    },

    profitCircle: {
        height: 180,
        width: 180,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: DARK_GREEN,
        borderRadius: 100,
    },

    profitLine: {
        height: 1,
        width: "95%",
        backgroundColor: "black",
    },

    moneyText: {
        fontSize: 24,
        textAlign: "center",
    },

    containerScrollView: {
        flexGrow: 1,
        width: "100%",
    },

});