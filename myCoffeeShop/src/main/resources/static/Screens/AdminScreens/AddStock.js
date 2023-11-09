import {View, Text, ScrollView, TouchableOpacity, TextInput} from "react-native";
import BottomButton from "../../Components/BottomButton";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {MY_RED} from "../../Help_Box/Colors";
import Spacer from "../../Components/Spacer";
import {useState} from "react";
import {addStock_styles} from "../../Style/Admin_style/AddStock_styles";

export default function AddStock({navigation}) {

    const [name, onChangeName] = useState('');
    const [price, onChangePrice] = useState('');
    const [amount, onChangeAmount] = useState('');
    const [unit, onChangeUnit] = useState('');


    return (
        <View style={addStock_styles.container}>
            <View style={addStock_styles.containerHeader}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <MaterialCommunityIcons
                        name="keyboard-backspace"
                        size={40}
                        color={MY_RED}
                        style={addStock_styles.backIcon}
                    />
                </TouchableOpacity>

                <Text style={addStock_styles.textHeader}>Add Stock</Text>

                <Spacer height={40}/>
            </View>

            <ScrollView style={addStock_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >
                <View style={addStock_styles.containerTextImput}>
                    <Text style={addStock_styles.text}>Name</Text>

                    <TextInput
                        style={addStock_styles.inputBox}
                        onChangeText={onChangeName}
                        value={name}
                        placeholder="Type Name"
                        // keyboardType="numeric"
                    />
                </View>

                <View style={addStock_styles.containerTextImput}>
                    <Text style={addStock_styles.text}>Price/Amount</Text>

                    <TextInput
                        style={addStock_styles.inputBox}
                        onChangeText={onChangePrice}
                        value={price}
                        placeholder="Type Price"
                        keyboardType="numeric"
                    />
                </View>

                <View style={addStock_styles.containerTextImput}>
                    <Text style={addStock_styles.text}>Amount</Text>

                    <TextInput
                        style={addStock_styles.inputBox}
                        onChangeText={onChangeAmount}
                        value={amount}
                        placeholder="Type Amount"
                        keyboardType="numeric"
                    />
                </View>

                <View style={addStock_styles.containerTextImput}>
                    <Text style={addStock_styles.text}>Unit</Text>

                    <TextInput
                        style={addStock_styles.inputBox}
                        onChangeText={onChangeUnit}
                        value={unit}
                        placeholder="Type Unit"
                        // keyboardType="numeric"
                    />
                </View>


                <Spacer/>
            </ScrollView>

            {
                (name === '' || price === '' || amount === '' || unit === '') ?
                    <BottomButton text={"NOT DONE"} navigation={navigation} navTo={"BACK"} action={"STOCK"}/>
                    :
                    <BottomButton text={"ADD"} navigation={navigation} navTo={"BACK"} action={"STOCK"}
                                  stockData={{
                                      "name": name,
                                      "quantity": 0,
                                      "price": price,
                                      "amount": amount,
                                      "unit": unit
                                  }}/>

            }
        </View>
    );

}