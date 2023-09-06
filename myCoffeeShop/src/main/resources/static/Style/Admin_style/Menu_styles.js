import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR, DARK_GREEN} from "../../Colors";

export const menu_styles = StyleSheet.create({
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

    plusIcon: {

    },

    containerScrollView: {
        flexGrow: 1,
        width: "100%",
        paddingTop: 20,
    },

    addProduct: {
        height: 60,
        width: 60,
        backgroundColor: DARK_GREEN,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
});