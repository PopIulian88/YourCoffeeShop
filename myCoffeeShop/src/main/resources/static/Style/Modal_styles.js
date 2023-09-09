import {StyleSheet} from "react-native";
import {DARK_GREEN, MY_GRAY} from "../Help_Box/Colors";


export const modal_styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: "90%",
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',


        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    modalText: {
        fontSize: 20,
        textAlign: "center",
    },

    inputBox: {
        width: "100%",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: MY_GRAY,

        fontSize: 26,
        textAlign: "center",
    },

    saveChanges: {
        height: 50,
        width: 130,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: DARK_GREEN,
    },

    saveButton: {
        fontSize: 24,
        color: "white",
    },
});