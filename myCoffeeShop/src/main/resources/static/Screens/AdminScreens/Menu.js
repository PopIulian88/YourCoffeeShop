import {Button, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import StockComponent from "../../Components/StockComponent";
import {menu_styles} from "../../Style/Admin_style/Menu_styles";
import MenuComponent from "../../Components/MenuComponent";
import Spacer from "../../Components/Spacer";
import {BACKGROUND_COLOR, DARK_GREEN} from "../../Help_Box/Colors";
import {useState} from "react";

export default function Menu({navigation}) {
    const [curentLine, setCurentLine] = useState(1);

    return (
        <View style={menu_styles.container}>
            <View style={menu_styles.containerUp}>
                <View style={menu_styles.containerUpText}>
                    <Image source={require("../../Poze/Logo.png")} style={menu_styles.logo}/>
                    <Text style={menu_styles.title}>Menu</Text>
                    <Image source={require("../../Poze/Logo.png")} style={menu_styles.logo}/>
                </View>

                <View style={menu_styles.tabContainer}>
                    <TouchableOpacity style={menu_styles.tabTextContainer} onPress={() => setCurentLine(1)}>
                        <Text style={{fontSize: 28}}>Drinks</Text>
                        <View style={[menu_styles.line,curentLine === 1 ? {backgroundColor: DARK_GREEN} :
                                                                        {backgroundColor: BACKGROUND_COLOR}]}></View>
                    </TouchableOpacity>


                    <TouchableOpacity style={menu_styles.tabTextContainer} onPress={() => setCurentLine(2)}>
                        <Text style={{fontSize: 28}}>Food</Text>
                        <View style={[menu_styles.line,curentLine === 2 ? {backgroundColor: DARK_GREEN} :
                                                                        {backgroundColor: BACKGROUND_COLOR}]}></View>
                    </TouchableOpacity>
                </View>

                <Spacer height={5}/>

                <TouchableOpacity style={menu_styles.addProduct}>
                    <MaterialIcons
                        name="add"
                        size={50}
                        color="black"
                        style={menu_styles.plusIcon}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView style={menu_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >
                <MenuComponent name={"Ice Coffee"} price={12}  navigation={navigation}
                               photoLink="https://images.immediate.co.uk/production/volatile/sites/2/2021/08/coldbrew-iced-latte-with-my-recipe-photo-by-@ellamiller_photo-f1e3d9e.jpg?quality=90&resize=556,505"/>

                <MenuComponent name={"Latte"} price={7} navigation={navigation}
                               photoLink="https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg"/>

                <MenuComponent navigation={navigation}/>

                <MenuComponent navigation={navigation}/>

            </ScrollView>
        </View>
    );

}