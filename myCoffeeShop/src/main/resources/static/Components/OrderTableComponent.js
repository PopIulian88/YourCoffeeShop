import {Text, View, Image, TouchableOpacity} from 'react-native';
import Spacer from "./Spacer";
import {orderTableComponent_styles} from "../Style/Components_style/OrderTableComponent_styles";
import {table_styles} from "../Style/Store_style/Table_styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useContext, useState} from "react";
import {MY_IP} from "../Help_Box/IP_help";
import {MyContext} from "../Context/MyContext";

export default function OrderTableComponent({data, name="Name", price=0, navigation,
                                          photoLink="https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg?w=2000",
                                                setOrderProducts, setOrderQuantiti  }) {

    const [counter, setCounter] = useState(0);

    const {tableToEdit, setTableToEdit} = useContext(MyContext);

    // setOrderProducts(tableToEdit.cart);
    // setOrderQuantiti(tableToEdit.products_quantiti);

    return (
        <>
            <View style={orderTableComponent_styles.container}>
                <View style={orderTableComponent_styles.containerCard}>
                    <View style={orderTableComponent_styles.leftCard}>
                        <Text style={orderTableComponent_styles.title}>{name}</Text>
                        <Text style={orderTableComponent_styles.text}>{price} $</Text>
                    </View>

                    <View style={orderTableComponent_styles.rightCard}>
                        <Image style={orderTableComponent_styles.image} source={photoLink === '' ?
                            {uri: "https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg?w=2000"}
                            : {uri: photoLink}}/>
                    </View>
                </View>

                <Spacer height={5}/>

                <View style={orderTableComponent_styles.conainerButtons}>
                    <View style={{flexDirection: "row"}}>
                        <TouchableOpacity style={orderTableComponent_styles.plusButton} onPress={() => {
                            setCounter(counter + 1);
                        }}>
                            <MaterialCommunityIcons
                                name="plus"
                                size={30}
                                color="white"
                                style={table_styles.backIcon}
                            />
                        </TouchableOpacity>

                        <Spacer height={5}/>

                        <View style={orderTableComponent_styles.counterView}>
                            <Text style={orderTableComponent_styles.textCounter}>{counter}</Text>
                        </View>

                        <Spacer height={5}/>

                        <TouchableOpacity style={orderTableComponent_styles.minusButton} onPress={() => {
                            if(counter > 0) {
                                setCounter(counter - 1);
                            }
                        }}>
                            <MaterialCommunityIcons
                                name="minus"
                                size={30}
                                color="white"
                                style={table_styles.backIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={orderTableComponent_styles.addToCartButton} onPress={() => {
                        // console.log(counter);
                        // console.log(data);
                        // console.log(tableToEdit);

                        // console.log(tableToEdit.id)
                        // console.log(tableToEdit.tableNumber)
                        // console.log(tableToEdit.state)
                        // console.log(tableToEdit.cart)
                        // console.log(tableToEdit.products_quantiti)


                        if(counter > 0) {
                            setOrderProducts(prevState => [...prevState, data]);
                            setOrderQuantiti(prevState => [...prevState, counter]);


                            setCounter(0);
                        }
                    }}>
                        <Text style={orderTableComponent_styles.addToCartText}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Spacer height={30}/>
        </>
    );

}