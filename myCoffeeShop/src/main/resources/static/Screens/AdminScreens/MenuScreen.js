import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import {menu_styles} from "../../Style/Admin_style/Menu_styles";
import MenuComponent from "../../Components/MenuComponent";
import Spacer from "../../Components/Spacer";
import {BACKGROUND_COLOR, DARK_GREEN} from "../../Help_Box/Colors";
import {useContext, useEffect, useState} from "react";
import {MY_IP} from "../../Help_Box/IP_help";
import {MyContext} from "../../Context/MyContext";


async function fetchDataGetProducts(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/products",
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return await responseJson.json();
}



export default function MenuScreen({navigation}) {
    const [curentLine, setCurentLine] = useState(1);

    const {productData, setProductData} = useContext(MyContext);

    const renderDynamicProduct = () => {
        return productData.map((item) => {
            return (
                <MenuComponent
                    key={item.id}
                    data={item}

                    name={item.name}
                    price={item.price}
                    photoLink={item.photoLink}

                    navigation={navigation}
                />
            );
        });
    };


    useEffect(() => {
        fetchDataGetProducts().then(respons => {
            setProductData(respons)
        })
        console.log(productData);
    }, [])

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

                <TouchableOpacity style={menu_styles.addProduct} onPress={() => {
                    navigation.navigate("AddProduct");
                }}>
                    <MaterialIcons
                        name="add"
                        size={50}
                        color="black"
                        style={menu_styles.plusIcon}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView style={menu_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >
                {renderDynamicProduct()}
            </ScrollView>
        </View>
    );

}