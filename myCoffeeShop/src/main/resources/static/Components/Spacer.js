import {Image, Text, View} from "react-native";

export default function Spacer({height = 20}) {
    return (
        <View style={{height: height, width: height}}>
        </View>
    );

}