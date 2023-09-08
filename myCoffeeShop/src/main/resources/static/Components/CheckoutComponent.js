import {Text, View} from 'react-native';
import {checkoutComponent_styles} from "../Style/Components_style/CheckoutComponent_styles";
import Spacer from "./Spacer";
import {DARK_GREEN} from "../Help_Box/Colors";


export default function CheckoutComponent({name="null", amount=0, price=0}) {
    return (
        <>
            <View style={checkoutComponent_styles.container}>
                <View style={checkoutComponent_styles.containerText}>
                    <Text style={checkoutComponent_styles.text}>{name}</Text>
                </View>
                <View style={checkoutComponent_styles.containerText}>
                    <Text style={checkoutComponent_styles.text}>x{amount}</Text>
                </View>
                <View style={checkoutComponent_styles.containerText}>
                    <Text style={[checkoutComponent_styles.text, {color: DARK_GREEN}]}>{price}$</Text>
                </View>
            </View>
            <Spacer/>
        </>
    );

}