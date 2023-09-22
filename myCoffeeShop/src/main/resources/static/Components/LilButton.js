import {Text, View, TouchableOpacity, Modal, Alert, Pressable, TextInput} from 'react-native';
import {lilButton_styles} from "../Style/Components_style/LilButton_styles";
import {useContext, useEffect, useState} from "react";
import {modal_styles} from "../Style/Modal_styles";
import Spacer from "./Spacer";
import {MY_IP} from "../Help_Box/IP_help";
import {MyContext} from "../Context/MyContext";


async function fetchDataDeleteStocks(id){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/stock/delete/" + id,
        {
            method: "DELETE",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return responseJson;
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
        console.log("Update corect");
    }else{
        console.log("Update STOCK fail");
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

async function fetchDataUpdateProfit(id, curentProfit, historic){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/profit/update",
        {
            method: "PUT",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "id": id,
                "curentProfit": curentProfit,
                "historic": historic
            })
        });

    if(responseJson.ok){
        console.log("Update corect");
    }else{
        console.log("Update Profit fail");
    }
}


export default function LilButton({data, text="null", color="black", navigation, action="null"}) {

        const [modalVisible, setModalVisible] = useState(false);

        const {stocksData, setStocksData} = useContext(MyContext);
        const {stockToEdit, setStockToEdit} = useContext(MyContext);

        const {productData, setProductData} = useContext(MyContext);

        const {profitData, setProfitData} = useContext(MyContext);


        const [addModalNumber, setAddModalNumber] = useState("");

    return (
        <TouchableOpacity style={[lilButton_styles.container, {backgroundColor: color}]} onPress={() => {
            if(text === "ADD"){
                setModalVisible(true);
            }else if(text === "EDIT"){
                setStockToEdit(data);
                navigation.navigate("EditStock");
            }else{
                if (action === "STOCK") {
                    fetchDataDeleteStocks(data.id).then(r => {
                        console.log("SUCCES DELETE STOCK");

                        fetchDataGetStocks().then(respons => {
                            setStocksData(respons)
                        })

                        fetchDataGetProducts().then(respons => {
                            setProductData(respons)
                        })

                    }).catch(e => {
                        console.log(e);
                    });
                }
            }
        }}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Fail to add stock");
                    setModalVisible(!modalVisible);
                }}>

                <View style={modal_styles.centeredView}>
                    <View style={modal_styles.modalView}>
                        <Text style={modal_styles.modalText}>Refile the stock!</Text>

                        <Spacer/>

                        <TextInput
                            style={modal_styles.inputBox}
                            onChangeText={setAddModalNumber}
                            value={addModalNumber}
                            placeholder="Type how many"
                            keyboardType="numeric"
                        />

                        <Spacer/>

                        <TouchableOpacity style={modal_styles.saveChanges} onPress={() => {
                            setModalVisible(false);

                            if(addModalNumber !== "") {
                                fetchDataUpdateStocks(
                                    data.id,
                                    data.name,
                                    (parseFloat(data.quantity) + parseFloat(addModalNumber)),
                                    data.price,
                                    data.amount,
                                    data.unit
                                ).then(r => {
                                    console.log("SUCCES UPDATE STOCK");

                                    fetchDataGetStocks().then(respons => {
                                        setStocksData(respons)
                                    })
                                }).catch(e => {
                                    console.log(e);
                                });

                                //Update PROFIT
                                fetchDataUpdateProfit(
                                    profitData[0].id,
                                    (profitData[0].curentProfit - (parseFloat(addModalNumber) * data.price)),
                                    [...profitData[0].historic, -(parseFloat(addModalNumber) * data.price)]
                                ).then(r => {

                                    fetchDataGetProfit().then(respons => {
                                        setProfitData(respons)
                                    })
                                }).catch(e => {
                                    console.log(e);
                                });
                            }



                            setAddModalNumber("");
                        }}>
                            <Text style={modal_styles.saveButton}>ADD</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </Modal>

            <Text style={lilButton_styles.text}>{text}</Text>
        </TouchableOpacity>

    );

}