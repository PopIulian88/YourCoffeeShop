import {Text, View, Image, TouchableOpacity} from 'react-native';
import Spacer from "./Spacer";
import {orderTableComponent_styles} from "../Style/Components_style/OrderTableComponent_styles";
import {table_styles} from "../Style/Store_style/Table_styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useState} from "react";

export default function OrderTableComponent({name="Name", price=0, navigation,
                                          photoLink="https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg?w=2000"}) {

    const [counter, setCounter] = useState(0);

    return (
        <>
            <View style={orderTableComponent_styles.container}>
                <View style={orderTableComponent_styles.containerCard}>
                    <View style={orderTableComponent_styles.leftCard}>
                        <Text style={orderTableComponent_styles.title}>{name}</Text>
                        <Text style={orderTableComponent_styles.text}>{price} $</Text>
                    </View>

                    <View style={orderTableComponent_styles.rightCard}>
                        <Image style={orderTableComponent_styles.image} source={{uri: photoLink}}/>
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
                        setCounter(0);
                    }}>
                        <Text style={orderTableComponent_styles.addToCartText}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Spacer height={30}/>
        </>
    );

}