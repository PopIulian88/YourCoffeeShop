import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {stock_styles} from "../../Style/Admin_style/Stock_styles";
import {MaterialIcons} from "@expo/vector-icons";
import StockComponent from "../../Components/StockComponent";
import {useContext, useEffect, useState} from "react";
import {MyContext} from "../../Context/MyContext";
import {
    fetchDataGetLimitedStock,
    fetchDataGetProfit,
    fetchDataGetSortedPriceStock, fetchDataGetSortedQuantityStock,
    fetchDataGetStocks
} from "../../Help_Box/API_calls";
import {Dropdown} from "react-native-element-dropdown";
import Spacer from "../../Components/Spacer";


export default function StockScreen({navigation}) {

    const {stocksData, setStocksData} = useContext(MyContext);
    const {profitData, setProfitData} = useContext(MyContext);

    const [isFocus, setIsFocus] = useState(false);
    const [filterSelected, setFilterSelected] = useState();
    const filtersData = [
        {label: "LimitedStock", value: '1'},
        {label: "Price", value: '2'},
        {label: "Quantity", value: '3'},
    ];


    const renderDynamicStock = () => {
        return stocksData.map((item) => {
            return (
                <StockComponent
                    key={item.id}
                    data={item}

                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    unit={item.unit}
                    quantity={item.quantity}
                    navigation={navigation}
                />
            );
        });
    };


    useEffect(() => {
        fetchDataGetStocks().then(respons => {
            setStocksData(respons)
        })

        fetchDataGetProfit().then(respons => {
            setProfitData(respons)
        })
    }, [])

    return (
        <View style={stock_styles.container}>
            <View style={stock_styles.containerUp}>
                <View style={stock_styles.containerUpText}>
                    <Image source={require("../../Poze/Logo.png")} style={stock_styles.logo}/>
                    <Text style={stock_styles.title}>Stock</Text>
                    <Image source={require("../../Poze/Logo.png")} style={stock_styles.logo}/>
                </View>
                <View style={stock_styles.undertitleContainer}>
                    <View style={{flex: 1}}>

                    </View>
                    <Spacer/>
                    <TouchableOpacity style={stock_styles.addStock} onPress={() => {
                        navigation.navigate("AddStock");
                    }}>
                        <MaterialIcons
                            name="add"
                            size={50}
                            color="black"
                            style={stock_styles.plusIcon}
                        />
                    </TouchableOpacity>
                    <Spacer height={10}/>
                    <Dropdown
                        style={stock_styles.inputBox}
                        data={filtersData}
                        placeholderStyle={stock_styles.placeholderStyle}
                        selectedTextStyle={stock_styles.selectedTextStyle}
                        inputSearchStyle={stock_styles.inputSearchStyle}
                        iconStyle={stock_styles.iconStyle}

                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Filter' : '...'}
                        value={filterSelected}

                        onChange={item => {
                            if(item.value == 1) {
                                fetchDataGetLimitedStock().then(respons => {
                                    setStocksData(respons)
                                })
                            }else if(item.value == 2) {
                                fetchDataGetSortedPriceStock().then(respons => {
                                    setStocksData(respons)
                                })
                            }else if(item.value == 3) {
                                fetchDataGetSortedQuantityStock().then(respons => {
                                    setStocksData(respons)
                                })
                            }
                            setFilterSelected(item);
                            setIsFocus(false);
                        }}

                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                    />
                </View>
            </View>


            <ScrollView style={stock_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}}
            >
                {renderDynamicStock()}
            </ScrollView>
        </View>
    );

}