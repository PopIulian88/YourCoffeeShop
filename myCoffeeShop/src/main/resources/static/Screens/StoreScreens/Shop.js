import {Image, Text, TouchableOpacity, View} from 'react-native';
import {shop_styles} from "../../Style/Store_style/Shop_styles";

import {MaterialCommunityIcons} from "@expo/vector-icons";
import {MY_RED} from "../../Help_Box/Colors";
import TableComponent from "../../Components/TableComponent";
import {useContext, useEffect, useState} from "react";
import {MyContext} from "../../Context/MyContext";
import {fetchDataGetProfit, fetchDataGetStoreTable} from "../../Help_Box/API_calls";

export default function Shop({navigation}) {

    const {tablesData, setTablesData} = useContext(MyContext)
    const {tableToEdit, setTableToEdit} = useContext(MyContext);

    const {profitData, setProfitData} = useContext(MyContext);



    useEffect(() => {
        fetchDataGetStoreTable().then(response => {
            setTablesData(response);
        })

        fetchDataGetProfit().then(respons => {
            setProfitData(respons);
        })

    }, [])




    return (
        <View style={shop_styles.container}>
            <View style={shop_styles.containerUp}>
                <View style={shop_styles.containerUpText}>
                    <Image source={require("../../Poze/Logo.png")} style={shop_styles.logo}/>
                    <Text style={shop_styles.title}>KEEP SMILING</Text>

                    <TouchableOpacity style={shop_styles.leaveButton} onPress={() => navigation.replace("Welcome")}>
                        <MaterialCommunityIcons
                            name="exit-run"
                            size={40}
                            color={MY_RED}
                            style={shop_styles.icon}
                        />
                    </TouchableOpacity>
                </View>

                <Image source={require("../../Poze/Roof.png")} style={shop_styles.roofPhoto}/>
            </View>

            <View style={shop_styles.containerMid}>
                <View style={shop_styles.tableLine}>
                    <TableComponent dataTable={tablesData[0]} type={tablesData[0].state} navigation={navigation}/>

                    <TableComponent dataTable={tablesData[1]} type={tablesData[1].state} navigation={navigation}/>
                </View>

                <View style={shop_styles.tableLine}>
                    <TableComponent dataTable={tablesData[2]} type={tablesData[2].state} navigation={navigation}/>

                    <TableComponent dataTable={tablesData[3]} type={tablesData[3].state} navigation={navigation}/>
                </View>

                <View style={shop_styles.tableLine}>
                    <TableComponent dataTable={tablesData[4]} type={tablesData[4].state} navigation={navigation}/>

                    <TableComponent dataTable={tablesData[5]} type={tablesData[5].state} navigation={navigation}/>
                </View>
            </View>

            <View style={shop_styles.containerDown}>
                <View style={shop_styles.line}></View>
                <Text style={shop_styles.text}>Be nice, be kind, be respectful and everything will come back to you</Text>
                <View style={shop_styles.line}></View>
            </View>
        </View>
    );

}