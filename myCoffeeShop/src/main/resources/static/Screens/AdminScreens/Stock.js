import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {stock_styles} from "../../Style/Admin_style/Stock_styles";
import {MaterialIcons} from "@expo/vector-icons";
import StockComponent from "../../Components/StockComponent";

export default function Stock({navigation}) {
    return (
        <View style={stock_styles.container}>
            <View style={stock_styles.containerUp}>
                <View style={stock_styles.containerUpText}>
                    <Image source={require("../../Poze/Logo.png")} style={stock_styles.logo}/>
                    <Text style={stock_styles.title}>Stock</Text>
                    <Image source={require("../../Poze/Logo.png")} style={stock_styles.logo}/>
                </View>

                <TouchableOpacity style={stock_styles.addStock}>
                    <MaterialIcons
                        name="add"
                        size={50}
                        color="black"
                        style={stock_styles.plusIcon}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView style={stock_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >
                <StockComponent name={"Coffee beans"} price={6} amount={1} unit="kg" quantity={269} navigation={navigation}/>

                <StockComponent navigation={navigation}/>

                <StockComponent navigation={navigation}/>
            </ScrollView>
        </View>
    );

}