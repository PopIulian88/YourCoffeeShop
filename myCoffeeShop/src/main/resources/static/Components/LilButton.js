import {Text, View, Image, TouchableOpacity} from 'react-native';
import {lilButton_styles} from "../Style/Components_style/LilButton_styles";

export default function LilButton({text="null", color="black", navigation, action}) {
    return (
        <TouchableOpacity style={[lilButton_styles.container, {backgroundColor: color}]} onPress={() => {
            text === "ADD" ? alert("Adauga marfa") : text === "EDIT" ? navigation.goBack() : alert("Ai sters obiect")
        }}>
            <Text style={lilButton_styles.text}>{text}</Text>
        </TouchableOpacity>

    );

}