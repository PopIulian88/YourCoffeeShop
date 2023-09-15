import {Text, View, ScrollView, Image, TouchableOpacity, RefreshControl, Button} from 'react-native';
import {stock_styles} from "../../Style/Admin_style/Stock_styles";
import {MaterialIcons} from "@expo/vector-icons";
import StockComponent from "../../Components/StockComponent";
import {MY_IP} from "../../Help_Box/IP_help";
import {useEffect, useState} from "react";
import Spacer from "../../Components/Spacer";


async function fetchDataGetStocks(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/stocks",
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return await responseJson.json();
}


export default function StockScreen({navigation}) {

    const [stocksData, setStocksData] = useState([]);


    const refreshStock = () => {
            fetchDataGetStocks().then(respons => {
                setStocksData(respons)
            })
            console.log(stocksData);
    }

    const renderDynamicStock = () => {
        return stocksData.map((item) => {
            return (
                <StockComponent
                    key={item.id}
                    data={item}

                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    unit={item.unit}
                    quantity={item.quantity}
                    navigation={navigation}
                />
            );
        });
    };


    useEffect(() => {
        fetchDataGetStocks().then(respons => {
            setStocksData(respons)
        })
        console.log(stocksData);
    }, [])

    return (
        <View style={stock_styles.container}>
            <View style={stock_styles.containerUp}>
                <View style={stock_styles.containerUpText}>
                    <Image source={require("../../Poze/Logo.png")} style={stock_styles.logo}/>
                    <Text style={stock_styles.title}>Stock</Text>
                    <Image source={require("../../Poze/Logo.png")} style={stock_styles.logo}/>
                </View>

                <TouchableOpacity style={stock_styles.addStock} onPress={() => {
                    navigation.navigate("AddStock");
                }}>
                    <MaterialIcons
                        name="add"
                        size={50}
                        color="black"
                        style={stock_styles.plusIcon}
                    />
                </TouchableOpacity>

                <Spacer height={5}/>

                <Button title={"Refresh"} onPress={() => refreshStock()}/>
            </View>



            <ScrollView style={stock_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}}
                >
                {renderDynamicStock()}
            </ScrollView>
        </View>
    );

}