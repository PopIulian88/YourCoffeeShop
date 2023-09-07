import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {profile_styles} from "../../Style/Admin_style/Profile_styles";
import {MaterialCommunityIcons, MaterialIcons, Octicons} from "@expo/vector-icons";
import {MY_RED} from "../../Help_Box/Colors";
import Spacer from "../../Components/Spacer";
import ProfitCard from "../../Components/ProfitCard";

export default function Profile({navigation}) {
    return (
        <View style={profile_styles.container}>
            <View style={profile_styles.containerHeader}>
                <View style={profile_styles.leftHeader}>
                    <Octicons
                        name="graph"
                        size={24}
                        color="black"
                        style={profile_styles.icon}
                    />
                    <Text style={profile_styles.title}>Profit and Loss</Text>
                </View>

                <TouchableOpacity style={profile_styles.rightHeader} onPress={() => navigation.navigate("Welcome")}>
                    <MaterialCommunityIcons
                        name="exit-run"
                        size={40}
                        color={MY_RED}
                        style={profile_styles.icon}
                    />
                </TouchableOpacity>
            </View>


            <View style={profile_styles.containerUp}>
                <View style={profile_styles.profitCircle}>
                    <Text style={[profile_styles.moneyText, {fontWeight: "bold"}]}>$ 129.69</Text>
                    <Spacer height={10}/>
                    <Text style={profile_styles.moneyText}>Profit</Text>
                </View>

                <Spacer/>

                <View style={profile_styles.profitLine}></View>
            </View>

            <ScrollView style={profile_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}}>
                <ProfitCard text={"Profit"} money={13.99}/>

                <ProfitCard text={"Loss"} money={200}/>
            </ScrollView>
        </View>
    );

}