import {Text, View} from 'react-native';
import {stockComponent_styles} from "../Style/Components_style/StockComponent_styles";
import LilButton from "./LilButton";
import {DARK_GREEN, MY_GRAY, MY_RED} from "../Help_Box/Colors";
import Spacer from "./Spacer";

export default function StockComponent({data, name="Name", price=0, amount=1, unit="kg",
                                           quantity=150, navigation}) {

    return (
        <>

        <View style={stockComponent_styles.container}>
            <View style={stockComponent_styles.containerCard}>
                <View style={stockComponent_styles.leftCard}>
                    <Text style={stockComponent_styles.title}>{name}</Text>
                    <Text style={stockComponent_styles.text}>{price}$ / {amount}{unit}</Text>
                </View>

                <View style={stockComponent_styles.rightCard}>
                    <Text style={stockComponent_styles.title}>{quantity} {unit}</Text>
                </View>
            </View>

            <View style={stockComponent_styles.containerButton}>
                <LilButton data={data} text="ADD" color={DARK_GREEN}/>

                <LilButton data={data} text="EDIT" color={MY_GRAY} navigation={navigation}/>

                <LilButton data={data} text="REMOVE" color={MY_RED} action="STOCK"/>
            </View>

        </View>
        <Spacer/>
        </>
);

}