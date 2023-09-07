import {StyleSheet} from "react-native";
import {DARK_GREEN} from "../../Help_Box/Colors";


export const admin_employee_button_styles = StyleSheet.create({
    container: {
        height: 150,
        width: 210,
        backgroundColor: DARK_GREEN,

        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },

    titleText: {
        fontSize: 24,
        color: "white",
    },

    text: {
        fontSize: 16,
        color: "white",
        textAlign: 'center',

    },

});