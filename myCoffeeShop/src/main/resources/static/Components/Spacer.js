import {Image, Text, View} from "react-native";
import {welcome_styles} from "../Style/Welcome_styles";

export default function Spacer({height = 20}) {
    return (
        <View style={{height: height}}>
        </View>
    );

}