import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR} from "../../Colors";

export const profile_styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        padding: 10,
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

    rightHeader: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
    },
});