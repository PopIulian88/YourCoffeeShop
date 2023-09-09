import {View, Text, ScrollView, TouchableOpacity, TextInput} from "react-native";
import BottomButton from "../../Components/BottomButton";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {MY_RED} from "../../Help_Box/Colors";
import Spacer from "../../Components/Spacer";
import {useState} from "react";
import {addProduct_styles} from "../../Style/Admin_style/AddProduct_styles";

export default function AddProduct({navigation}) {

    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');

    return (
        <View style={addProduct_styles.container}>
            <View style={addProduct_styles.containerHeader}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <MaterialCommunityIcons
                        name="keyboard-backspace"
                        size={40}
                        color={MY_RED}
                        style={addProduct_styles.backIcon}
                    />
                </TouchableOpacity>

                <Text style={addProduct_styles.textHeader}>Add Product</Text>

                <Spacer height={40}/>
            </View>

            <ScrollView style={addProduct_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >
                <View style={addProduct_styles.containerTextImput}>
                    <Text style={addProduct_styles.text}>Name</Text>

                    <TextInput
                        style={addProduct_styles.inputBox}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Type Name"
                        // keyboardType="numeric"
                    />
                </View>

                <View style={addProduct_styles.containerTextImput}>
                    <Text style={addProduct_styles.text}>Description</Text>

                    <TextInput
                        style={addProduct_styles.inputBox}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Type Description"
                        // keyboardType="numeric"
                    />
                </View>

                <View style={addProduct_styles.containerTextImput}>
                    <Text style={addProduct_styles.text}>Price</Text>

                    <TextInput
                        style={addProduct_styles.inputBox}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Type Price"
                        keyboardType="numeric"
                    />
                </View>

                <View style={addProduct_styles.containerTextImput}>
                    <Text style={addProduct_styles.text}>PhotoLink</Text>

                    <TextInput
                        style={addProduct_styles.inputBox}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Type Photo Link"
                        // keyboardType="numeric"
                    />
                </View>

                <View style={addProduct_styles.containerTextImput}>
                    <Text style={addProduct_styles.text}>Incredients</Text>

                    <TextInput
                        style={addProduct_styles.inputBox}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Type Incredients"
                        // keyboardType="numeric"
                    />
                </View>



                <Spacer/>
            </ScrollView>

            <BottomButton text={"ADD"} navigation={navigation} navTo={"BACK"}/>
        </View>
    );

}