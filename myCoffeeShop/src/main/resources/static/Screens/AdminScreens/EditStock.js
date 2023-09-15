import {View, Text, ScrollView, TouchableOpacity, TextInput} from "react-native";
import {editStock_styles} from "../../Style/Admin_style/EditStock_styles";
import BottomButton from "../../Components/BottomButton";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {MY_RED} from "../../Help_Box/Colors";
import Spacer from "../../Components/Spacer";
import {useContext, useState} from "react";
import {MyContext} from "../../Context/MyContext";

export default function EditStock({navigation}) {

    const {stockToEdit, setStockToEdit} = useContext(MyContext);


    const [name, onChangeName] = useState(stockToEdit.name);
    const [quantity, onChangeQuantity] = useState(stockToEdit.quantity.toString());
    const [price, onChangePrice] = useState(stockToEdit.price.toString());
    const [amount, onChangeAmount] = useState(stockToEdit.amount.toString());
    const [unit, onChangeUnit] = useState(stockToEdit.unit);


    return (
        <View style={editStock_styles.container}>
            <View style={editStock_styles.containerHeader}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <MaterialCommunityIcons
                        name="keyboard-backspace"
                        size={40}
                        color={MY_RED}
                        style={editStock_styles.backIcon}
                    />
                </TouchableOpacity>

                <Text style={editStock_styles.textHeader}>Edit Stock</Text>

                <Spacer height={40}/>
            </View>

            <ScrollView style={editStock_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >
                <View style={editStock_styles.containerTextImput}>
                    <Text style={editStock_styles.text}>Name</Text>

                    <TextInput
                        style={editStock_styles.inputBox}
                        onChangeText={onChangeName}
                        value={name}
                        placeholder="Type Name"
                        // keyboardType="numeric"
                    />
                </View>

                <View style={editStock_styles.containerTextImput}>
                    <Text style={editStock_styles.text}>Quantity</Text>

                    <TextInput
                        style={editStock_styles.inputBox}
                        onChangeText={onChangeQuantity}
                        value={quantity}
                        placeholder="Type Quantity"
                        keyboardType="numeric"
                    />
                </View>

                <View style={editStock_styles.containerTextImput}>
                    <Text style={editStock_styles.text}>Price/Amount</Text>

                    <TextInput
                        style={editStock_styles.inputBox}
                        onChangeText={onChangePrice}
                        value={price}
                        placeholder="Type Price"
                        keyboardType="numeric"
                    />
                </View>

                <View style={editStock_styles.containerTextImput}>
                    <Text style={editStock_styles.text}>Amount</Text>

                    <TextInput
                        style={editStock_styles.inputBox}
                        onChangeText={onChangeAmount}
                        value={amount}
                        placeholder="Type Amount"
                        keyboardType="numeric"
                    />
                </View>

                <View style={editStock_styles.containerTextImput}>
                    <Text style={editStock_styles.text}>Unit</Text>

                    <TextInput
                        style={editStock_styles.inputBox}
                        onChangeText={onChangeUnit}
                        value={unit}
                        placeholder="Type Unit"
                        // keyboardType="numeric"
                    />
                </View>


                <Spacer/>
            </ScrollView>

            {
                (name === '' || quantity === '' || price === '' || amount === '' || unit === '') ?
                <BottomButton text={"NOT DONE"} navigation={navigation} navTo={"BACK"} action={"STOCK"}/>
                :
                <BottomButton text={"SAVE"} navigation={navigation} navTo={"BACK"} action={"STOCK"}
                              stockData={{
                                  "id": stockToEdit.id,
                                  "name": name,
                                  "quantity": quantity,
                                  "price": price,
                                  "amount": amount,
                                  "unit": unit
                              }}/>
            }
        </View>
    );

}