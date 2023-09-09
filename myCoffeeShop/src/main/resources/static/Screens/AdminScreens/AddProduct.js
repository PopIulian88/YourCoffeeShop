import {View, Text, ScrollView, TouchableOpacity, TextInput} from "react-native";
import BottomButton from "../../Components/BottomButton";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {MY_RED} from "../../Help_Box/Colors";
import Spacer from "../../Components/Spacer";
import {useState} from "react";
import {addProduct_styles} from "../../Style/Admin_style/AddProduct_styles";
import {Dropdown} from "react-native-element-dropdown";
import IngredientTag from "../../Components/IngredientTag";

export default function AddProduct({navigation}) {

    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const data = [
        { label: 'Coffee Beans', value: '1' },
        { label: 'Milk', value: '2' },
        { label: 'null3', value: '3' },
        { label: 'null4', value: '4' },
        { label: 'null5', value: '5' },
    ];

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

                    <Dropdown
                        style={addProduct_styles.inputBox}
                        data={data}
                        search
                        placeholderStyle={addProduct_styles.placeholderStyle}
                        selectedTextStyle={addProduct_styles.selectedTextStyle}
                        inputSearchStyle={addProduct_styles.inputSearchStyle}
                        iconStyle={addProduct_styles.iconStyle}

                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={value}

                        onChange={item => {
                            console.log(item);
                            setValue(item.value);
                            setIsFocus(false);
                        }}

                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                    />

                    <Spacer height={5}/>

                    <View style={addProduct_styles.containerAddIncredient}>

                        <TextInput
                            style={addProduct_styles.inputBox}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Type how many"
                            keyboardType="numeric"
                        />

                        <Spacer height={5}/>

                        <TouchableOpacity style={addProduct_styles.addIncredientButton} onPress={() => {
                            alert("Ingredient added");
                            setValue(null);
                            onChangeNumber('')
                        }}>
                            <Text style={addProduct_styles.addIncredientText}>Add</Text>
                        </TouchableOpacity>

                    </View>

                    <Spacer height={5}/>

                    <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                        <IngredientTag text={"Milk"} cantiti={0.25}/>
                        <Spacer height={5}/>
                        <IngredientTag text={"Coffee Beans"} cantiti={0.01}/>
                        <Spacer height={5}/>

                    </View>
                </View>

                <Spacer/>
            </ScrollView>

            <BottomButton text={"ADD"} navigation={navigation} navTo={"BACK"}/>
        </View>
    );

}