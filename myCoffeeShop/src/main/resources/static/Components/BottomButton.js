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

    // if(responseJson.ok){
    //     console.log("Salvare corecta");
    // }else{
    //     console.log("Add STOCK fail");
    // }
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

    // if(responseJson.ok){
    //     console.log("Edit corect");
    // }else{
    //     console.log("Edit STOCK fail");
    // }
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
async function fetchDataAddProduct(myName, description, price, incredients, incredients_quantiti, photoLink){
    // console.log("------------------");
    // console.log(myName);
    // console.log(description);
    // console.log(price);
    // console.log(incredients);
    // console.log(incredients_quantiti);
    // console.log(photoLink);
    // console.log("------------------");

    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/addProduct",
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "name": myName,
                "description": description,
                "price": price,
                "incredients": incredients,
                "incredients_quantiti": incredients_quantiti,
                "photoLink": photoLink
            })
        });


    // if(responseJson.ok){
    //     console.log("Salvare corecta");
    // }else{
    //     console.log("Add PRODUCT fail");
    // }
}

async function fetchDataUpdateProduct(myId, myName, description, price, incredients, incredients_quantiti, photoLink){

    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/product/update",
        {
            method: "PUT",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "id": myId,
                "name": myName,
                "description": description,
                "price": price,
                "incredients": incredients,
                "incredients_quantiti": incredients_quantiti,
                "photoLink": photoLink
            })
        });


    // if(responseJson.ok){
    //     console.log("Salvare corecta");
    // }else{
    //     console.log("Add PRODUCT fail");
    // }
}

async function fetchDataUpdateStoreTable(myId, tableNumber, state, cart, products_quantiti){

    // console.log(cart);
    // console.log(products_quantiti);

    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/StoreTable/update",
        {
            method: "PUT",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "id": myId,
                "tableNumber": tableNumber,
                "state": state,
                "cart": cart,
                "products_quantiti": products_quantiti
            })
        });


    // if(responseJson.ok){
    //     console.log("Salvare corecta");
    // }else{
    //     console.log("Add PRODUCT fail");
    // }
}

async function fetchDataGetStoreTable(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/StoreTables",
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

    // if(responseJson.ok){
    //     console.log("Update corect");
    // }else{
    //     console.log("Update Profit fail");
    // }
}

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

                                        //This if for update the state
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

                                // console.log(stocksData.filter((element) => element.name === stockData.name).length)

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

                                        //This if for update the state
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

                                        //This if for update the state
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

                            // console.log(tableToEdit);
                            // console.log(BillPrice);
                            // console.log(profitData)

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
                                        navigation.navigate("Welcome");

                                    })
                                })
                            })



                            // navigation.navigate(navTo);


                        }else if(text === "Place order") {
                            console.log(tableToEdit);

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
                                    navigation.navigate("Welcome");
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