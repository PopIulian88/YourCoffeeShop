import {Text, TouchableOpacity, View} from "react-native";
import {bottomButton_styles} from "../Style/Components_style/BottomButton_styles";
import {MY_GRAY} from "../Help_Box/Colors";
import {MY_IP} from "../Help_Box/IP_help";
import {useContext} from "react";
import {MyContext} from "../Context/MyContext";


async function fetchDataAddStocks(name, quantity, price, amount, unit){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/addStock",
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "quantity": quantity,
                "price": price,
                "amount": amount,
                "unit": unit
            })
        });

    if(responseJson.ok){
        console.log("Salvare corecta");
    }else{
        console.log("Add STOCK fail");
    }
}

async function fetchDataUpdateStocks(id, name, quantity, price, amount, unit){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/stock/update",
        {
            method: "PUT",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "id": id,
                "name": name,
                "quantity": quantity,
                "price": price,
                "amount": amount,
                "unit": unit
            })
        });

    if(responseJson.ok){
        console.log("Edit corect");
    }else{
        console.log("Edit STOCK fail");
    }
}

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

export default function BottomButton({text="null", navigation, navTo="BACK", action='',
                                         stockData={}}) {


    const {stocksData, setStocksData} = useContext(MyContext);

    return (
        <View style={bottomButton_styles.container}>
            {
                text === "NOT DONE" ?
                    <TouchableOpacity style={[bottomButton_styles.containerButton, {backgroundColor: MY_GRAY}]}
                                      onPress={() => {alert("Complete all the fields first")}}>

                        <Text style={bottomButton_styles.text}>{text}</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={bottomButton_styles.containerButton} onPress={() => {
                        if(text === "ADD"){
                            if(action === "STOCK"){
                                fetchDataAddStocks(
                                    stockData.name,
                                    stockData.quantity,
                                    stockData.price,
                                    stockData.amount,
                                    stockData.unit
                                ).then(r => {

                                    //This if for update the state
                                    fetchDataGetStocks().then(respons => {
                                        setStocksData(respons)
                                    });

                                    navigation.goBack();
                                }).catch(e => console.log(e))
                            }else if(text === "PRODUCT") {

                            }else{
                                console.log("No add action");
                            }
                        }else if(text === "SAVE") {
                            if(action === "STOCK") {
                                fetchDataUpdateStocks(
                                    stockData.id,
                                    stockData.name,
                                    stockData.quantity,
                                    stockData.price,
                                    stockData.amount,
                                    stockData.unit
                                ).then(r => {

                                    //This if for update the state
                                    fetchDataGetStocks().then(respons => {
                                        setStocksData(respons)
                                    });

                                    navigation.goBack();
                                }).catch(e => console.log(e))
                            }else if(action === "PRODUCT"){

                            }else {
                                navigation.goBack();
                                console.log("No add action");
                            }
                        }else if(text === "Checkout"){
                            navigation.navigate(navTo);
                        }else {
                            navigation.goBack();
                        }

                    }}>
                        <Text style={bottomButton_styles.text}>{text}</Text>
                    </TouchableOpacity>
            }
        </View>
    );

}