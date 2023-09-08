import {View, Text} from "react-native";
import {editStock_styles} from "../../Style/Admin_style/EditStock_styles";

export default function EditStock({navigation}) {
    return (
        <View style={editStock_styles.container}>
            <Text>Aici se editeaza acest stock</Text>
        </View>
    );

}