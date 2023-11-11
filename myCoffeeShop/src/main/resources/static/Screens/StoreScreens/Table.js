import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {table_styles} from "../../Style/Store_style/Table_styles";
import {BACKGROUND_COLOR, DARK_GREEN, MY_RED} from "../../Help_Box/Colors";
import Spacer from "../../Components/Spacer";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useContext, useEffect, useState} from "react";
import OrderTableComponent from "../../Components/OrderTableComponent";
import {MyContext} from "../../Context/MyContext";
import {fetchDataGetProducts, fetchDataGetStoreTable, fetchDataUpdateStoreTable} from "../../Help_Box/API_calls";


export default function Table({navigation}) {

    const {productData, setProductData} = useContext(MyContext);
    const {tableToEdit, setTableToEdit} = useContext(MyContext);

    const [curentLine, setCurentLine] = useState(1);

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

                    navigation={navigation}
                />
            );
        });
    };

    useEffect(() => {
        fetchDataGetProducts().then(respons => {
            setProductData(respons)
        })
        // console.log(productData);
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

                    // console.log("--------------")
                    // console.log(orderProducts);
                    // console.log(orderQuantiti);
                    // console.log("--------------")

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

                            // setOrderProducts([]);
                            // setOrderQuantiti([]);
                            navigation.navigate("FinishOrder");
                        })
                    });

                }}>
                    <Text style={table_styles.text}>Show order</Text>
                </TouchableOpacity>

                <Spacer height={10}/>
                <View style={table_styles.blackLine}></View>
                <Spacer height={10}/>


                {/*BARA DE MANCARE SI BAUTURI -> Adio bun prieten, ne vom revedea curand*/}
                {/*<View style={table_styles.tabContainer}>*/}
                {/*    <TouchableOpacity style={table_styles.tabTextContainer} onPress={() => setCurentLine(1)}>*/}
                {/*        <Text style={{fontSize: 28}}>Drinks</Text>*/}
                {/*        <View style={[table_styles.line,curentLine === 1 ? {backgroundColor: DARK_GREEN} :*/}
                {/*            {backgroundColor: BACKGROUND_COLOR}]}></View>*/}
                {/*    </TouchableOpacity>*/}


                {/*    <TouchableOpacity style={table_styles.tabTextContainer} onPress={() => setCurentLine(2)}>*/}
                {/*        <Text style={{fontSize: 28}}>Food</Text>*/}
                {/*        <View style={[table_styles.line,curentLine === 2 ? {backgroundColor: DARK_GREEN} :*/}
                {/*            {backgroundColor: BACKGROUND_COLOR}]}></View>*/}
                {/*    </TouchableOpacity>*/}
                {/*</View>*/}

                {/*<Spacer height={5}/>*/}

            </View>

            <ScrollView style={table_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >
                {renderDynamicMenu()}
            </ScrollView>
        </View>
    );

}