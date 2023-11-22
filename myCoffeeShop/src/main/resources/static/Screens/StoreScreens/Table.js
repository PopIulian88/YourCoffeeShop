import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {table_styles} from "../../Style/Store_style/Table_styles";
import {BACKGROUND_COLOR, DARK_GREEN, MY_RED} from "../../Help_Box/Colors";
import Spacer from "../../Components/Spacer";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useContext, useEffect, useState} from "react";
import OrderTableComponent from "../../Components/OrderTableComponent";
import {MyContext} from "../../Context/MyContext";
import {
    fetchDataGetProducts,
    fetchDataGetStocks,
    fetchDataGetStoreTable,
    fetchDataUpdateStoreTable
} from "../../Help_Box/API_calls";


export default function Table({navigation}) {

    const {productData, setProductData} = useContext(MyContext);
    const {stocksData, setStocksData} = useContext(MyContext);
    const {tableToEdit, setTableToEdit} = useContext(MyContext);

    const [orderProducts, setOrderProducts] = useState(tableToEdit.cart);
    const [orderQuantiti, setOrderQuantiti] = useState(tableToEdit.products_quantiti);


    const renderDynamicMenu = () => {
        return productData.map((item) => {
            return (
                <OrderTableComponent
                    key={item.id}
                    data={item}

                    name={item.name}
                    price={item.price}
                    photoLink={item.photoLink}
                    setOrderProducts={setOrderProducts}
                    setOrderQuantiti={setOrderQuantiti}
                    OrderProducts={orderProducts}

                    navigation={navigation}
                />
            );
        });
    };

    useEffect(() => {
        fetchDataGetProducts().then(respons => {
            setProductData(respons)
        })

        fetchDataGetStocks().then(respons => {
            setStocksData(respons)
        })

    }, [])


    return (
        <View style={table_styles.container}>
            <View style={table_styles.containerUp}>
                <View style={table_styles.containerUpText}>
                    <TouchableOpacity onPress={() => {
                        navigation.replace("Store");
                    }}>
                        <MaterialCommunityIcons
                            name="keyboard-backspace"
                            size={40}
                            color={MY_RED}
                            style={table_styles.backIcon}
                        />
                    </TouchableOpacity>

                    <View style={{flexDirection: "row"}}>
                        <Text style={table_styles.title}>Order Table</Text>
                        <Text style={[table_styles.title, {color: DARK_GREEN}]}> #{tableToEdit.tableNumber}</Text>
                    </View>
                    <Image source={require("../../Poze/Logo.png")} style={table_styles.logo}/>
                </View>

                <TouchableOpacity style={table_styles.orderButton} onPress={() => {

                    fetchDataUpdateStoreTable(
                        tableToEdit.id,
                        tableToEdit.tableNumber,
                        tableToEdit.state,
                        orderProducts,
                        orderQuantiti
                    ).then(respons => {

                        fetchDataGetStoreTable().then(respons => {
                            setTableToEdit(respons[tableToEdit.tableNumber - 1]);
                        }).then(() => {

                            navigation.navigate("FinishOrder");
                        })
                    });

                }}>
                    <Text style={table_styles.text}>Show order</Text>
                </TouchableOpacity>

                <Spacer height={10}/>
                <View style={table_styles.blackLine}></View>
                <Spacer height={10}/>

            </View>

            <ScrollView style={table_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >
                {renderDynamicMenu()}
            </ScrollView>
        </View>
    );

}