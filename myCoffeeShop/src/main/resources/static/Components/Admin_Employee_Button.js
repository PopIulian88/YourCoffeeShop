import {Text, TouchableOpacity} from 'react-native';
import {admin_employee_button_styles} from "../Style/Components_style/Admin_Employee_Button_styles";

export default function Admin_Employee_Button({title = "Title", text = "Text", navigation, navTo}) {
    return (
        <TouchableOpacity style={admin_employee_button_styles.container} onPress={() =>  navigation.navigate(navTo)}>
            <Text style={admin_employee_button_styles.titleText}>{title}</Text>
            <Text style={admin_employee_button_styles.text}>{text}</Text>
        </TouchableOpacity>
    );

}