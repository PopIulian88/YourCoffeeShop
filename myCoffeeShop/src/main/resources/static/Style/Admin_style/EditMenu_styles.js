import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR, DARK_GREEN, MY_GRAY} from "../../Help_Box/Colors";

export const editMenu_styles = StyleSheet.create({
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
        flex: 2,
        height: 50,
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },

    containerAddIncredient: {
        flexDirection: "row",
    },

    addIncredientButton: {
        flex: 1,
        height: 50,
        padding: 10,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: DARK_GREEN,
    },

    addIncredientText: {
        fontSize: 16,
        color: "white",
        textAlign: "center",
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

});