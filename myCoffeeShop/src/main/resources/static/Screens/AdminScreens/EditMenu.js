import {View, Text, ScrollView, TouchableOpacity, TextInput} from "react-native";
import BottomButton from "../../Components/BottomButton";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {MY_RED} from "../../Help_Box/Colors";
import Spacer from "../../Components/Spacer";
import {useState} from "react";
import {editMenu_styles} from "../../Style/Admin_style/EditMenu_styles";

export default function EditMenu({navigation}) {

    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');

    return (
        <View style={editMenu_styles.container}>
            <View style={editMenu_styles.containerHeader}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <MaterialCommunityIcons
                        name="keyboard-backspace"
                        size={40}
                        color={MY_RED}
                        style={editMenu_styles.backIcon}
                    />
                </TouchableOpacity>

                <Text style={editMenu_styles.textHeader}>Edit Product</Text>

                <Spacer height={40}/>
            </View>

            <ScrollView style={editMenu_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >
                <View style={editMenu_styles.containerTextImput}>
                    <Text style={editMenu_styles.text}>Name</Text>

                    <TextInput
                        style={editMenu_styles.inputBox}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Type Name"
                        // keyboardType="numeric"
                    />
                </View>

                <View style={editMenu_styles.containerTextImput}>
                    <Text style={editMenu_styles.text}>Description</Text>

                    <TextInput
                        style={editMenu_styles.inputBox}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Type Description"
                        // keyboardType="numeric"
                    />
                </View>

                <View style={editMenu_styles.containerTextImput}>
                    <Text style={editMenu_styles.text}>Price</Text>

                    <TextInput
                        style={editMenu_styles.inputBox}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Type Price"
                        keyboardType="numeric"
                    />
                </View>

                <View style={editMenu_styles.containerTextImput}>
                    <Text style={editMenu_styles.text}>PhotoLink</Text>

                    <TextInput
                        style={editMenu_styles.inputBox}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Type Photo Link"
                        // keyboardType="numeric"
                    />
                </View>

                <View style={editMenu_styles.containerTextImput}>
                    <Text style={editMenu_styles.text}>Incredients</Text>

                    <TextInput
                        style={editMenu_styles.inputBox}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Type Incredients"
                        // keyboardType="numeric"
                    />
                </View>



                <Spacer/>
            </ScrollView>

            <BottomButton text={"SAVE"} navigation={navigation} navTo={"BACK"}/>
        </View>
    );

}