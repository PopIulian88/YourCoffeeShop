import {Text, View, TouchableOpacity} from 'react-native';
import {profile_styles} from "../../Style/Admin_style/Profile_styles";
import {menu_styles} from "../../Style/Admin_style/Menu_styles";
import {MaterialCommunityIcons, MaterialIcons, Octicons} from "@expo/vector-icons";
import {MY_RED} from "../../Colors";

export default function Profile() {
    return (
        <View style={profile_styles.container}>
            <View style={profile_styles.containerHeader}>
                <View style={profile_styles.leftHeader}>
                    <Octicons
                        name="graph"
                        size={24}
                        color="black"
                        style={menu_styles.plusIcon}
                    />
                    <Text style={profile_styles.title}>Profit and Loss</Text>
                </View>

                <TouchableOpacity style={profile_styles.rightHeader}>
                    <MaterialCommunityIcons
                        name="exit-run"
                        size={40}
                        color={MY_RED}
                        style={menu_styles.plusIcon}
                    />
                </TouchableOpacity>
            </View>
            <Text>Buna</Text>
        </View>
    );

}