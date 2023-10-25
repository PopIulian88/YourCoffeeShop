import {Text, View, TouchableOpacity, Modal, Alert, TextInput} from 'react-native';
import {lilButton_styles} from "../Style/Components_style/LilButton_styles";
import {useContext, useEffect, useState} from "react";
import {modal_styles} from "../Style/Modal_styles";
import Spacer from "./Spacer";
import {MyContext} from "../Context/MyContext";
import {
    fetchDataDeleteStocks,
    fetchDataGetProducts, fetchDataGetProfit,
    fetchDataGetStocks, fetchDataUpdateProfit,
    fetchDataUpdateStocks
} from "../Help_Box/API_calls";

export default function LilButton({data, text = "null", color = "black", navigation, action = "null", myIndex}) {

    const [modalVisible, setModalVisible] = useState(false);

    const {stocksData, setStocksData} = useContext(MyContext);
    const {stockToEdit, setStockToEdit} = useContext(MyContext);

    const {productData, setProductData} = useContext(MyContext);

    const {profitData, setProfitData} = useContext(MyContext);

    // const {tableToEdit, setTableToEdit} = useContext(MyContext);


    const [addModalNumber, setAddModalNumber] = useState("");

    // const [finishOrderProducts, setFinishOrderProducts]= useState(tableToEdit.cart)
    // const [finishOrderQuantiti, setFinishOrderQuantiti]= useState(tableToEdit.products_quantiti)


    return (
        <TouchableOpacity style={[lilButton_styles.container, {backgroundColor: color}]} onPress={() => {
            if (text === "ADD") {
                setModalVisible(true);
            } else if (text === "EDIT") {
                setStockToEdit(data);
                navigation.navigate("EditStock");
            } else {
                if (action === "STOCK") {
                    fetchDataDeleteStocks(data.id).then(r => {
                        // console.log("SUCCES DELETE STOCK");

                        fetchDataGetStocks().then(respons => {
                            setStocksData(respons)
                        })

                        fetchDataGetProducts().then(respons => {
                            setProductData(respons);
                        })

                    }).catch(e => {
                        console.log(e);
                    });
                } else if (action === "ORDER") {
                    // console.log(tableToEdit);
                    // console.log(myIndex);

                    // console.log(finishOrderProducts);
                    // console.log(finishOrderQuantiti);

                    // const updatedFinishOrderProducts = (tableToEdit.cart).filter((item, index) => index !== myIndex);
                    // // setFinishOrderProducts(updatedFinishOrderProducts);
                    //
                    // const updatedFinishOrderQuantiti = (tableToEdit.products_quantiti).filter((item, index) => index !== myIndex);
                    // // setFinishOrderQuantiti(updatedFinishOrderQuantiti);

                    // fetchDataUpdateStoreTable(
                    //     tableToEdit.id,
                    //     tableToEdit.tableNumber,
                    //     tableToEdit.state,
                    //     updatedFinishOrderProducts,
                    //     updatedFinishOrderQuantiti
                    // ).then(response => {
                    //     fetchDataGetStoreTable().then(response => {
                    //         console.log(response);
                    //         setTableToEdit(response[myIndex]);
                    //     })
                    // });


                    alert("You have to buy the Pass for this features");
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

                            if (addModalNumber !== "") {
                                fetchDataUpdateStocks(
                                    data.id,
                                    data.name,
                                    (parseFloat(data.quantity) + parseFloat(addModalNumber)),
                                    data.price,
                                    data.amount,
                                    data.unit
                                ).then(r => {
                                    // console.log("SUCCES UPDATE STOCK");

                                    fetchDataGetStocks().then(respons => {
                                        setStocksData(respons)
                                    })
                                }).catch(e => {
                                    console.log(e);
                                });

                                //Update PROFIT
                                fetchDataUpdateProfit(
                                    profitData[0].id,
                                    (profitData[0].curentProfit - ((parseFloat(addModalNumber) * data.price) / data.amount)),
                                    [...profitData[0].historic, -((parseFloat(addModalNumber) * data.price) / data.amount)]
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