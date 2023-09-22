import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import {welcome_styles} from "../Style/Welcome_styles";
import Spacer from "../Components/Spacer";
import Admin_Employee_Button from "../Components/Admin_Employee_Button";

export default function Welcome({ navigation }) {

    return (
        <View style={welcome_styles.container} >
            <View style={welcome_styles.containerUp}>
                <Image style={welcome_styles.photoLogo} source={require('../Poze/Logo.png')} />

                <View style={welcome_styles.textContainer}>
                    <Text style={welcome_styles.textWelcome}>Welcome</Text>
                    <Text style={welcome_styles.text}>Hope you have an awesome day, and a productive one eather</Text>
                </View>

                <View style={welcome_styles.buttonContainer}>
                    <Admin_Employee_Button title={"Admin"} text={"Manage the products and see the profits"} navigation={navigation} navTo="Password"/>
                    <Spacer/>
                    <Admin_Employee_Button title={"EMPLOYEE"} text={"Place the orders and organize the restaurant"} navigation={navigation} navTo="Store"/>
                </View>
            </View>

            <View style={welcome_styles.containerDown}>
                <TouchableOpacity onPress={() => Alert.alert("Contact", "0736814072")}>
                    <Text style={welcome_styles.contactText} >Contact the owner</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}