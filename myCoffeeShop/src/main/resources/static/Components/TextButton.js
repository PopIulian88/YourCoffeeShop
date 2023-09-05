import {Text, TouchableOpacity} from "react-native";
import {textButton_styles} from "../Style/Components_style/textButton_styles";


export default function TextButton({text="null", color="black", navigation, navTo="BACK"}) {
    return (
        <TouchableOpacity style={[{backgroundColor: color} , textButton_styles.container]}  onPress={() => {
            navTo === "BACK" ? navigation.goBack() : navTo === "ALERT" ? alert("INCORRECT PASSWORD") : navigation.navigate(navTo) }}>
             <Text style={textButton_styles.text}>{text}</Text>
        </TouchableOpacity>
    );

}