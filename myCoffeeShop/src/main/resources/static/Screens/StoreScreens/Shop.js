import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import {shop_styles} from "../../Style/Store_style/Shop_styles";
import {menu_styles} from "../../Style/Admin_style/Menu_styles";
import {profile_styles} from "../../Style/Admin_style/Profile_styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {MY_RED} from "../../Help_Box/Colors";
import TableComponent from "../../Components/TableComponent";

export default function Shop({navigation}) {
    return (
        <View style={shop_styles.container}>
            <View style={shop_styles.containerUp}>
                <View style={shop_styles.containerUpText}>
                    <Image source={require("../../Poze/Logo.png")} style={shop_styles.logo}/>
                    <Text style={shop_styles.title}>KEEP SMILING</Text>

                    <TouchableOpacity style={shop_styles.leaveButton} onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons
                            name="exit-run"
                            size={40}
                            color={MY_RED}
                            style={shop_styles.icon}
                        />
                    </TouchableOpacity>
                </View>

                <Image source={require("../../Poze/Roof.png")} style={shop_styles.roofPhoto}/>
            </View>

            <View style={shop_styles.containerMid}>
                <View style={shop_styles.tableLine}>
                    <TableComponent nr={0} type={1} navigation={navigation}/>

                    <TableComponent nr={1} navigation={navigation}/>
                </View>

                <View style={shop_styles.tableLine}>
                    <TableComponent nr={2} navigation={navigation}/>

                    <TableComponent nr={3} type={1} navigation={navigation}/>
                </View>

                <View style={shop_styles.tableLine}>
                    <TableComponent nr={4} navigation={navigation}/>

                    <TableComponent nr={5} type={2} navigation={navigation}/>
                </View>
            </View>

            <View style={shop_styles.containerDown}>
                <View style={shop_styles.line}></View>
                <Text style={shop_styles.text}>Be nice, be kind, be respectful and everything will come back to you</Text>
                <View style={shop_styles.line}></View>
            </View>
        </View>
    );

}