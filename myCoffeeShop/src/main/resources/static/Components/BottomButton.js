import {Text, TouchableOpacity, View} from "react-native";
import {bottomButton_styles} from "../Style/Components_style/BottomButton_styles";


export default function BottomButton({text="null", navigation, navTo="BACK"}) {
    return (
        <View style={bottomButton_styles.container}>
            <TouchableOpacity style={bottomButton_styles.containerButton} onPress={() => {
                navTo === "BACK" ? navigation.goBack() : navigation.navigate(navTo);
            }}>
                <Text style={bottomButton_styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    );

}