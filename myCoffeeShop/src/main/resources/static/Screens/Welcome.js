import {Button, Text, View} from 'react-native';
import {welcome_styles} from "../Style/Welcome_styles";

export default function Welcome() {
    return (
        <View style={welcome_styles.container}>
            <Text>Buna</Text>
        </View>
    );

}