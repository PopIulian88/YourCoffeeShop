import {Text, View, Image, TouchableOpacity} from 'react-native';
import Spacer from "./Spacer";
import {menuComponent_styles} from "../Style/Components_style/MenuComponent_styles";
import {useContext} from "react";
import {MyContext} from "../Context/MyContext";

export default function MenuComponent({data, name="Name", price=0, navigation, photoLink}) {

    const {productToEdit, setProductToEdit} = useContext(MyContext);

    return (
        <>
            <TouchableOpacity style={menuComponent_styles.container} onPress={() => {
                setProductToEdit(data);
                navigation.navigate("EditMenu");
            }}>
                <View style={menuComponent_styles.leftCard}>
                    <Text style={menuComponent_styles.title}>{name}</Text>
                    <Text style={menuComponent_styles.text}>{price} $</Text>
                </View>

                <View style={menuComponent_styles.rightCard}>
                    <Image style={menuComponent_styles.image} source={photoLink === "" ?
                        {uri: "https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg?w=2000"}
                        : {uri: photoLink}}/>
                </View>
            </TouchableOpacity>
            <Spacer/>
        </>
    );

}