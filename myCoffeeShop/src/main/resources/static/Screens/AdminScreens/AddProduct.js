import {View, Text, ScrollView, TouchableOpacity, TextInput} from "react-native";
import BottomButton from "../../Components/BottomButton";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {MY_GRAY, MY_RED} from "../../Help_Box/Colors";
import Spacer from "../../Components/Spacer";
import {useContext, useEffect, useState} from "react";
import {addProduct_styles} from "../../Style/Admin_style/AddProduct_styles";
import {Dropdown} from "react-native-element-dropdown";
import IngredientTag from "../../Components/IngredientTag";
import {MY_IP} from "../../Help_Box/IP_help";
import {MyContext} from "../../Context/MyContext";
import {fetchDataGetStocks} from "../../Help_Box/API_calls";




export default function AddProduct({navigation}) {

    const [name, onChangeName] = useState('');
    const [descripsion, onChangeDescripsion] = useState('');
    const [price, onChangePrice] = useState('');
    const [photoLink, onChangePhotoLink] = useState('');

    const [incredient, setIncredient] = useState(null);
    const [incredient_qantiti, onChangeIncredient_Qantiti] = useState('');

    const [incredients, setIncredients] = useState([]);
    const [quantitis, setQuantitis] = useState([])

    const [isFocus, setIsFocus] = useState(false);

    const {stocksData, setStocksData} = useContext(MyContext);


    const renderDynamicIngredient = () => {
        return incredients.map((item, index) => {
            return (
                <>
                <IngredientTag
                    key={item.id}
                    data={item}

                    setIncredients={setIncredients}
                    incredients={incredients}
                    setQuantitis={setQuantitis}
                    quantitis={quantitis}
                    indexIngredient={index}
                    text={item.name}
                    cantiti={quantitis[index]}
                />
                <Spacer height={5}/>
                </>
            );
        });
    };

    useEffect(() => {
        fetchDataGetStocks().then(respons => {
            setStocksData(respons)
        })
        // console.log(stocksData);
    }, [])

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
                        onChangeText={onChangeName}
                        value={name}
                        placeholder="Type Name"
                        // keyboardType="numeric"
                    />
                </View>

                <View style={addProduct_styles.containerTextImput}>
                    <Text style={addProduct_styles.text}>Description</Text>

                    <TextInput
                        style={addProduct_styles.inputBox}
                        onChangeText={onChangeDescripsion}
                        value={descripsion}
                        placeholder="Type Description"
                        // keyboardType="numeric"
                    />
                </View>

                <View style={addProduct_styles.containerTextImput}>
                    <Text style={addProduct_styles.text}>Price</Text>

                    <TextInput
                        style={addProduct_styles.inputBox}
                        onChangeText={onChangePrice}
                        value={price}
                        placeholder="Type Price"
                        keyboardType="numeric"
                    />
                </View>

                <View style={addProduct_styles.containerTextImput}>
                    <Text style={addProduct_styles.text}>PhotoLink</Text>

                    <TextInput
                        style={addProduct_styles.inputBox}
                        onChangeText={onChangePhotoLink}
                        value={photoLink}
                        placeholder="Type Photo Link"
                        // keyboardType="numeric"
                    />
                </View>

                <View style={addProduct_styles.containerTextImput}>
                    <Text style={addProduct_styles.text}>Incredients</Text>

                    <Dropdown
                        style={addProduct_styles.inputBox}
                        data={stocksData}
                        search
                        placeholderStyle={addProduct_styles.placeholderStyle}
                        selectedTextStyle={addProduct_styles.selectedTextStyle}
                        inputSearchStyle={addProduct_styles.inputSearchStyle}
                        iconStyle={addProduct_styles.iconStyle}

                        labelField="name"
                        valueField="id"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={incredient}

                        onChange={item => {
                            // console.log(item);
                            setIncredient(item);
                            setIsFocus(false);
                        }}

                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                    />

                    <Spacer height={5}/>

                    <View style={addProduct_styles.containerAddIncredient}>

                        <TextInput
                            style={addProduct_styles.inputBox}
                            onChangeText={onChangeIncredient_Qantiti}
                            value={incredient_qantiti}
                            placeholder="Type how many"
                            keyboardType="numeric"
                        />

                        <Spacer height={5}/>

                        {
                            (incredient === null || incredient_qantiti === '') ?

                            <TouchableOpacity style={[addProduct_styles.addIncredientButton, {backgroundColor: MY_GRAY}]}
                                              onPress={() => {
                                alert("Complete the fields first");

                            }}>

                                <Text style={addProduct_styles.addIncredientText}>Add</Text>
                            </TouchableOpacity>
                                :
                                <TouchableOpacity style={addProduct_styles.addIncredientButton} onPress={() => {

                                    if(incredients.find((object) => object.id === incredient.id)) {
                                        alert("Deja adaugat");
                                    }else{
                                        setIncredients(prevState => [...prevState, incredient]);
                                        setQuantitis(prevState => [...prevState, parseFloat(incredient_qantiti)]);

                                        setIncredient(null);
                                        onChangeIncredient_Qantiti('')
                                    }

                                }}>

                                    <Text style={addProduct_styles.addIncredientText}>Add</Text>
                                </TouchableOpacity>

                        }

                    </View>

                    <Spacer height={5}/>

                    <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                        {renderDynamicIngredient()}

                    </View>
                </View>

                <Spacer/>
            </ScrollView>

            {

                (name === '' || descripsion === '' || price === '' || incredients.length === 0) ?
                <BottomButton text={"NOT DONE"} navigation={navigation} navTo={"BACK"} action={"PRODUCT"}/>
                :
                <BottomButton text={"ADD"} navigation={navigation} navTo={"BACK"} action={"PRODUCT"}
                              stockData={{
                                  "name": name,
                                  "description": descripsion,
                                  "price": parseFloat(price),
                                  "incredients": incredients,
                                  "incredients_quantiti": quantitis,
                                  "photoLink": photoLink
                              }}/>
            }
        </View>
    );

}