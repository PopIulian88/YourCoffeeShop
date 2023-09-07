import {Image, TouchableOpacity} from "react-native";
import {tableComponent_styles} from "../Style/Components_style/TableComponent_styles";
import {useState} from "react";

export default function TableComponent({nr, type=0, navigation}) {
    const [tableType, setTableType] = useState(type);

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

        if(tableType === 0) {
            navigation.navigate("Table");
        }else if(tableType === 1){
            navigation.navigate("Checkout");
        }else{
            alert("The table is clean and readdy");
            setTableType(0);
        }
    }

}



