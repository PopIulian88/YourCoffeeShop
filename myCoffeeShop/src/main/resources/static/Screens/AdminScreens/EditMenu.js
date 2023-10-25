import {View, Text, ScrollView, TouchableOpacity, TextInput} from "react-native";
import BottomButton from "../../Components/BottomButton";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {MY_GRAY, MY_RED} from "../../Help_Box/Colors";
import Spacer from "../../Components/Spacer";
import {useContext, useEffect, useState} from "react";
import {editMenu_styles} from "../../Style/Admin_style/EditMenu_styles";
import {Dropdown} from "react-native-element-dropdown";
import IngredientTag from "../../Components/IngredientTag";
import {MyContext} from "../../Context/MyContext";
import {fetchDataDeleteProduct, fetchDataGetProducts, fetchDataGetStocks} from "../../Help_Box/API_calls";


export default function EditMenu({navigation}) {

    const {stocksData, setStocksData} = useContext(MyContext);

    const {productToEdit, setProductToEdit} = useContext(MyContext);
    const {productData, setProductData} = useContext(MyContext);


    const [name, onChangeName] = useState(productToEdit.name);
    const [descripsion, onChangeDescripsion] = useState(productToEdit.description);
    const [price, onChangePrice] = useState(productToEdit.price.toString());
    const [photoLink, onChangePhotoLink] = useState(productToEdit.photoLink);

    const [incredient, setIncredient] = useState(null);
    const [incredient_qantiti, onChangeIncredient_Qantiti] = useState('');

    const [incredients, setIncredients] = useState(productToEdit.incredients);
    const [quantitis, setQuantitis] = useState(productToEdit.incredients_quantiti)

    const [isFocus, setIsFocus] = useState(false);


    const renderDynamicIngredient = () => {
        return incredients.map((item, index) => {
            return (
                <View key={item.id}>
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
                </View>
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

                <TouchableOpacity onPress={() => {
                    // console.log(productToEdit);
                    fetchDataDeleteProduct(productToEdit.id).then(r => {

                        fetchDataGetProducts().then(respons => {
                            setProductData(respons)
                        })

                        navigation.goBack();
                    });

                }}>
                    <MaterialCommunityIcons
                        name="delete"
                        size={40}
                        color={MY_RED}
                        style={editMenu_styles.backIcon}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView style={editMenu_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >
                <View style={editMenu_styles.containerTextImput}>
                    <Text style={editMenu_styles.text}>Name</Text>

                    <TextInput
                        style={editMenu_styles.inputBox}
                        onChangeText={onChangeName}
                        value={name}
                        placeholder="Type Name"
                        // keyboardType="numeric"
                    />
                </View>

                <View style={editMenu_styles.containerTextImput}>
                    <Text style={editMenu_styles.text}>Description</Text>

                    <TextInput
                        style={editMenu_styles.inputBox}
                        onChangeText={onChangeDescripsion}
                        value={descripsion}
                        placeholder="Type Description"
                        // keyboardType="numeric"
                    />
                </View>

                <View style={editMenu_styles.containerTextImput}>
                    <Text style={editMenu_styles.text}>Price</Text>

                    <TextInput
                        style={editMenu_styles.inputBox}
                        onChangeText={onChangePrice}
                        value={price}
                        placeholder="Type Price"
                        keyboardType="numeric"
                    />
                </View>

                <View style={editMenu_styles.containerTextImput}>
                    <Text style={editMenu_styles.text}>PhotoLink</Text>

                    <TextInput
                        style={editMenu_styles.inputBox}
                        onChangeText={onChangePhotoLink}
                        value={photoLink}
                        placeholder="Type Photo Link"
                        // keyboardType="numeric"
                    />
                </View>

                <View style={editMenu_styles.containerTextImput}>
                    <Text style={editMenu_styles.text}>Incredients</Text>

                    <Dropdown
                        style={editMenu_styles.inputBox}
                        data={stocksData}
                        search
                        placeholderStyle={editMenu_styles.placeholderStyle}
                        selectedTextStyle={editMenu_styles.selectedTextStyle}
                        inputSearchStyle={editMenu_styles.inputSearchStyle}
                        iconStyle={editMenu_styles.iconStyle}

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

                    <View style={editMenu_styles.containerAddIncredient}>

                    <TextInput
                        style={editMenu_styles.inputBox}
                        onChangeText={onChangeIncredient_Qantiti}
                        value={incredient_qantiti}
                        placeholder="Type how many"
                        keyboardType="numeric"
                    />

                    <Spacer height={5}/>

                        {
                            (incredient === null || incredient_qantiti === '') ?

                                <TouchableOpacity style={[editMenu_styles.addIncredientButton, {backgroundColor: MY_GRAY}]}
                                                  onPress={() => {
                                                      alert("Complete the fields first");

                                                  }}>

                                    <Text style={editMenu_styles.addIncredientText}>Add</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={editMenu_styles.addIncredientButton} onPress={() => {

                                    if(incredients.find((object) => object.id === incredient.id)) {
                                        alert("Deja adaugat");
                                    }else{
                                        setIncredients(prevState => [...prevState, incredient]);
                                        setQuantitis(prevState => [...prevState, parseFloat(incredient_qantiti)]);

                                        setIncredient(null);
                                        onChangeIncredient_Qantiti('')
                                    }

                                }}>

                                    <Text style={editMenu_styles.addIncredientText}>Add</Text>
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
                    <BottomButton text={"SAVE"} navigation={navigation} navTo={"BACK"} action={"PRODUCT"}
                                  stockData={{
                                      "id": productToEdit.id,
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