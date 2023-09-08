import {View, Text} from "react-native";
import {editMenu_styles} from "../../Style/Admin_style/EditMenu_styles";

export default function EditMenu({navigation}) {
    return (
        <View style={editMenu_styles.container}>
            <Text>Aici se editeaza acest produs</Text>
        </View>
    );

}