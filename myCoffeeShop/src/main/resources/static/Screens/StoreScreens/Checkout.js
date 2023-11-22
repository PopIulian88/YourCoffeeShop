import {ScrollView, Text, View, Image} from 'react-native';
import {checkout_styles} from "../../Style/Store_style/Checkout_styles";
import Spacer from "../../Components/Spacer";
import BottomButton from "../../Components/BottomButton";
import CheckoutComponent from "../../Components/CheckoutComponent";
import {useContext, useState} from "react";
import {MyContext} from "../../Context/MyContext";

export default function Checkout({navigation}) {

    const {tableToEdit, setTableToEdit} = useContext(MyContext);

    const renderDynamicCheckout = () => {
        return (tableToEdit.cart).map((item, index) => {

            return (
                <CheckoutComponent
                    key={item.id}
                    data={item}

                    name={item.name}
                    amount={tableToEdit.products_quantiti[index]}
                    price={item.price}

                    navigation={navigation}
                />
            );
        });
    };

    const renderDynamicTotalPrice = () => {

        return (tableToEdit.cart).reduce((suma, element, index) => suma + (element.price) * tableToEdit.products_quantiti[index], 0);
    };

    return (
        <View style={checkout_styles.container}>
            <View style={checkout_styles.containerUp}>
                <View style={checkout_styles.containerCard}>
                    <Image source={require("../../Poze/Logo.png")} style={checkout_styles.logo}/>

                    <View style={checkout_styles.priceBox}>
                        <Text style={checkout_styles.text}>Total Bill</Text>
                        <Spacer height={5}/>
                        <Text style={checkout_styles.title}>${renderDynamicTotalPrice()}</Text>
                    </View>
                </View>

                <Spacer height={20}/>
                <View style={checkout_styles.line}></View>
                <Spacer height={5}/>
                <Text style={checkout_styles.text}>For your</Text>
                <Spacer height={5}/>
                <View style={checkout_styles.line}></View>

            </View>

            <View style={checkout_styles.containerDown}>
                <ScrollView style={checkout_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >
                    {renderDynamicCheckout()}
                </ScrollView>

                <BottomButton text="Checkout" navigation={navigation} navTo={"Shop"} BillPrice={renderDynamicTotalPrice()}/>
            </View>
        </View>
    );

}