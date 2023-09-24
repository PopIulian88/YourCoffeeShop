import {Image, TouchableOpacity} from "react-native";
import {tableComponent_styles} from "../Style/Components_style/TableComponent_styles";
import {useContext, useEffect, useState} from "react";
import {MyContext} from "../Context/MyContext";
import {MY_IP} from "../Help_Box/IP_help";

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

export default function TableComponent({dataTable, type=0, navigation}) {
    const [tableType, setTableType] = useState(type);

    const {tableToEdit, setTableToEdit} = useContext(MyContext);

    const {tablesData, setTablesData} = useContext(MyContext)



    return (
        <TouchableOpacity style={tableComponent_styles.container} onPress={() => onPressTableHandler()}>
            <Image source={tableType === 0 ? require("../Poze/coffee-table-black.png") :
                        tableType === 1 ? require("../Poze/coffee-table-green.png") :
                            require("../Poze/coffee-table-red.png")}
                   style={tableComponent_styles.table}/>
        </TouchableOpacity>
    );


    function onPressTableHandler() {
        // setTableType((tableType + 1) % 3);
        // console.log(dataTable);

        if(tableType === 0) {
            setTableToEdit(dataTable)
            navigation.navigate("Table");
        }else if(tableType === 1){
            setTableToEdit(dataTable)
            navigation.navigate("Checkout");
        }else{

            fetchDataUpdateStoreTable(
                dataTable.id,
                dataTable.tableNumber,
                0,
                [],
                []
            ).then(response => {
                fetchDataGetStoreTable().then(response => {
                    setTablesData(response)
                }).then(() => {
                    navigation.navigate("Welcome");

                })
            })

            alert("The table is clean and readdy");
            // setTableType(0);
        }
    }

}



