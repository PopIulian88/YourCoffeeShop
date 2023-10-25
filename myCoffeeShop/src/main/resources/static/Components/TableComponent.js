import {Image, TouchableOpacity} from "react-native";
import {tableComponent_styles} from "../Style/Components_style/TableComponent_styles";
import {useContext, useEffect, useState} from "react";
import {MyContext} from "../Context/MyContext";
import {fetchDataGetStoreTable, fetchDataUpdateStoreTable} from "../Help_Box/API_calls";

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
                    navigation.replace("Shop");

                })
            })

            alert("The table is clean and readdy");
            // setTableType(0);
        }
    }

}



