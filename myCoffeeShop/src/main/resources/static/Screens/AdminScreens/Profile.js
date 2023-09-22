import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {profile_styles} from "../../Style/Admin_style/Profile_styles";
import {MaterialCommunityIcons, MaterialIcons, Octicons} from "@expo/vector-icons";
import {MY_RED} from "../../Help_Box/Colors";
import Spacer from "../../Components/Spacer";
import ProfitCard from "../../Components/ProfitCard";
import {useContext, useEffect} from "react";
import {MyContext} from "../../Context/MyContext";
import {MY_IP} from "../../Help_Box/IP_help";


async function fetchDataGetProfit(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/profits",
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return await responseJson.json();
}

export default function Profile({navigation}) {

    const {profitData, setProfitData} = useContext(MyContext);

        fetchDataGetProfit().then(respons => {
            setProfitData(respons);
        })

        // console.log(profitData[0]);

    const renderDynamicProfit = () => {
        return (profitData[0].historic).map((item) => {
            return (
                <>
                {
                    (item > 0) ?
                    <ProfitCard
                        key={item.id}
                        data={item}

                        text={"Profit"}
                        money={item}
                    /> : <ProfitCard
                        key={item.id}
                        data={item}

                        text={"Loss"}
                        money={-item}
                    />
                }
                </>
            );
        });
    };


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
                    <Text style={[profile_styles.moneyText, {fontWeight: "bold"}]}>$ {profitData[0].curentProfit.toFixed(2)}</Text>
                    <Spacer height={10}/>
                    <Text style={profile_styles.moneyText}>Profit</Text>
                </View>

                <Spacer/>

                <View style={profile_styles.profitLine}></View>
            </View>

            <ScrollView style={profile_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}}>
                {renderDynamicProfit()}
            </ScrollView>
        </View>
    );

}