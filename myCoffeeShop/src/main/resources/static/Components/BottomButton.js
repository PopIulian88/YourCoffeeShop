import {Text, TouchableOpacity, View} from "react-native";
import {bottomButton_styles} from "../Style/Components_style/BottomButton_styles";
import {MY_GRAY} from "../Help_Box/Colors";
import {useContext} from "react";
import {MyContext} from "../Context/MyContext";
import {
    fetchDataAddProduct,
    fetchDataAddStocks,
    fetchDataGetProducts,
    fetchDataGetStocks, fetchDataGetStoreTable, fetchDataUpdateProduct, fetchDataUpdateProfit,
    fetchDataUpdateStocks, fetchDataUpdateStoreTable
} from "../Help_Box/API_calls";


export default function BottomButton({text="null", navigation, navTo="BACK", action='', BillPrice=0,
                                         stockData={}}) {


    const {stocksData, setStocksData} = useContext(MyContext);

    const {productData, setProductData} = useContext(MyContext);

    const {tableToEdit, setTableToEdit} = useContext(MyContext);
    const {tablesData, setTablesData} = useContext(MyContext)

    const {profitData, setProfitData} = useContext(MyContext);




    return (
        <View style={bottomButton_styles.container}>
            {
                text === "NOT DONE" ?
                    <TouchableOpacity style={[bottomButton_styles.containerButton, {backgroundColor: MY_GRAY}]}
                                      onPress={() => {
                                          action === "Shop" ? alert("Complete all the fields first")
                                              : alert("No product added")
                                      }}>

                        <Text style={bottomButton_styles.text}>{text}</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={bottomButton_styles.containerButton} onPress={() => {
                        if(text === "ADD"){
                            if(action === "STOCK"){

                                if(stocksData.find((element) => element.name === stockData.name)) {
                                    alert("Already added");
                                }else {
                                    fetchDataAddStocks(
                                        stockData.name,
                                        stockData.quantity,
                                        stockData.price,
                                        stockData.amount,
                                        stockData.unit
                                    ).then(r => {

                                        fetchDataGetStocks().then(respons => {
                                            setStocksData(respons)
                                        });

                                        navigation.goBack();
                                    }).catch(e => console.log(e))
                                }
                            }else if(action === "PRODUCT") {

                                if(productData.find((element) => element.name === stockData.name)) {
                                    alert("Already added");
                                }else {
                                    fetchDataAddProduct(
                                        stockData.name,
                                        stockData.description,
                                        stockData.price,
                                        stockData.incredients,
                                        stockData.incredients_quantiti,
                                        stockData.photoLink
                                    ).then(r => {
                                        fetchDataGetProducts().then(respons => {
                                            setProductData(respons)
                                        })

                                        navigation.goBack();
                                    })
                                }
                            }else{
                                console.log("No add action");
                            }
                        }else if(text === "SAVE") {
                            if(action === "STOCK") {

                                if(stocksData.find((element) => (element.name === stockData.name && element.id !== stockData.id))) {
                                    alert("Already added");
                                }else {
                                    fetchDataUpdateStocks(
                                        stockData.id,
                                        stockData.name,
                                        stockData.quantity,
                                        stockData.price,
                                        stockData.amount,
                                        stockData.unit
                                    ).then(r => {

                                        fetchDataGetStocks().then(respons => {
                                            setStocksData(respons)
                                        });

                                        fetchDataGetProducts().then(respons => {
                                            setProductData(respons)
                                        })

                                        navigation.goBack();
                                    }).catch(e => console.log(e))
                                }
                            }else if(action === "PRODUCT"){

                                if(productData.find((element) => (element.name === stockData.name && element.id !== stockData.id))) {
                                    alert("Already added");
                                }else {
                                    fetchDataUpdateProduct(
                                        stockData.id,
                                        stockData.name,
                                        stockData.description,
                                        stockData.price,
                                        stockData.incredients,
                                        stockData.incredients_quantiti,
                                        stockData.photoLink
                                    ).then(r => {

                                        fetchDataGetProducts().then(respons => {
                                            setProductData(respons)
                                        })

                                        navigation.goBack();
                                    }).catch(e => console.log(e))
                                }
                            }else {
                                navigation.goBack();
                                console.log("No add action");
                            }
                        }else if(text === "Checkout"){

                            fetchDataUpdateProfit(
                                profitData[0].id,
                                (profitData[0].curentProfit + BillPrice),
                                [...profitData[0].historic, BillPrice]
                            ).then(response => {
                                fetchDataUpdateStoreTable(
                                    tableToEdit.id,
                                    tableToEdit.tableNumber,
                                    2,
                                    [],
                                    []
                                ).then(response => {
                                    fetchDataGetStoreTable().then(response => {
                                        setTablesData(response)
                                    }).then(() => {
                                        navigation.replace("Shop");

                                    })
                                })
                            })

                        }else if(text === "Place order") {
                            let incredDict = {};

                            //Creare dictionar cu incredientele folosite
                            (tableToEdit.cart).forEach((prod, indexProd) => {
                                (prod.incredients).forEach((incred, indexIncred) => {
                                    if(incred.name in incredDict){
                                        incredDict[incred.name] = parseFloat( incredDict[incred.name] ) + parseFloat( ( parseFloat(prod.incredients_quantiti[indexIncred]) * parseFloat( tableToEdit.products_quantiti[indexProd]) ).toFixed(2) );
                                    }else{
                                        incredDict[incred.name] = ( parseFloat ( (prod.incredients_quantiti[indexIncred]) ) * parseFloat( tableToEdit.products_quantiti[indexProd] ) ).toFixed(2);
                                    }
                                })
                            });

                            //Update la baza de date in functie de calculele din dictionar
                            (tableToEdit.cart).forEach((prod, indexProd) => {
                                (prod.incredients).forEach((incred, indexIncred) => {

                                    fetchDataUpdateStocks(
                                        incred.id,
                                        incred.name,
                                        (parseFloat( incred.quantity ) - parseFloat ( incredDict[incred.name] )).toFixed(2),
                                        incred.price,
                                        incred.amount,
                                        incred.unit
                                    ).then(r => {})
                                })
                            });

                            fetchDataUpdateStoreTable(
                                tableToEdit.id,
                                tableToEdit.tableNumber,
                                1,
                                tableToEdit.cart,
                                tableToEdit.products_quantiti
                            ).then(response => {
                                fetchDataGetStoreTable().then(response => {
                                    setTablesData(response);
                                    setTableToEdit(response[tableToEdit.tableNumber - 1]);
                                }).then(() => {
                                    navigation.replace("Store");

                                })

                            })
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