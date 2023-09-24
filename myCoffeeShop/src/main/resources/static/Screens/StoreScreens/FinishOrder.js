import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {finishOrder_styles} from "../../Style/Store_style/FinishOrder_styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {DARK_GREEN, MY_RED} from "../../Help_Box/Colors";
import Spacer from "../../Components/Spacer";
import BottomButton from "../../Components/BottomButton";
import FinishOrderComponent from "../../Components/FinishOrderComponent";
import {MyContext} from "../../Context/MyContext";
import {useContext, useEffect} from "react";
import {MY_IP} from "../../Help_Box/IP_help";
import OrderTableComponent from "../../Components/OrderTableComponent";

export default function FinishOrder({navigation}) {

    const {tableToEdit, setTableToEdit} = useContext(MyContext);

    // console.log(tableToEdit.cart[0].name);

    // console.log(tableToEdit.products_quantiti[0]);



    const renderDynamicFinishOrder = () => {
        return (tableToEdit.cart).map((item, index) => {
            return (
                <FinishOrderComponent
                    key={item.id}
                    data={item}

                    myIndex={index}
                    name={item.name}
                    price={item.price}
                    amount={tableToEdit.products_quantiti[index]}
                    // amount={1}

                    photoLink={item.photoLink}

                    navigation={navigation}
                />
            );
        });
    };

    // console.log(tablesData);

    return (
        <View style={finishOrder_styles.container}>
            <View style={finishOrder_styles.containerUp}>
                <View style={finishOrder_styles.containerUpText}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack();
                    }}>
                        <MaterialCommunityIcons
                            name="keyboard-backspace"
                            size={40}
                            color={MY_RED}
                            style={finishOrder_styles.backIcon}
                        />
                    </TouchableOpacity>

                    <View style={{flexDirection: "row"}}>
                        <Text style={finishOrder_styles.title}>Finish Order</Text>
                        <Text style={[finishOrder_styles.title, {color: DARK_GREEN}]}> #{tableToEdit.tableNumber}</Text>
                    </View>
                    <Image source={require("../../Poze/Logo.png")} style={finishOrder_styles.logo}/>
                </View>

                <Spacer height={10}/>
                <View style={finishOrder_styles.blackLine}></View>

            </View>

            <ScrollView style={finishOrder_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >
                {renderDynamicFinishOrder()}
            </ScrollView>

            {
                tableToEdit.products_quantiti[0] ?
                <BottomButton text="Place order" navigation={navigation} navTo={"Shop"}/>
                    :
                    <BottomButton text="NOT DONE" navigation={navigation} navTo={"Shop"}/>

            }
        </View>
    );

}