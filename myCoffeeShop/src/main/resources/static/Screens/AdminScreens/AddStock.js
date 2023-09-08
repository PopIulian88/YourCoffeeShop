import {View, Text} from "react-native";
import {addStock_styles} from "../../Style/Admin_style/AddStock_styles";

export default function AddStock({navigation}) {
    return (
        <View style={addStock_styles.container}>
            <Text>Aici se adauga acest stock</Text>
        </View>
    );

}