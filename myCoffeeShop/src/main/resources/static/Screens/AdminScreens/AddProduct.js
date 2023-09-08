import {View, Text} from "react-native";
import {addProduct_styles} from "../../Style/Admin_style/AddProduct_styles";

export default function AddProduct({navigation}) {
    return (
        <View style={addProduct_styles.container}>
            <Text>Aici se adauga acest prosus</Text>
        </View>
    );

}