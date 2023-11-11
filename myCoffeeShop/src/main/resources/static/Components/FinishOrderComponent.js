import {Text, View, Image} from 'react-native';
import LilButton from "./LilButton";
import {MY_RED} from "../Help_Box/Colors";
import Spacer from "./Spacer";
import {finishOrderComponent_styles} from "../Style/Components_style/FinishOrderCmponent_styles";

export default function FinishOrderComponent({data, myIndex, name="Name", price=0, amount=0, navigation,
                                                 photoLink="https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg?w=2000"}) {
    return (
        <>
            <View style={finishOrderComponent_styles.container}>
                <View style={finishOrderComponent_styles.containerCard}>
                    <View style={finishOrderComponent_styles.leftCard}>
                        <Text style={finishOrderComponent_styles.title}>{name}</Text>
                        <Text style={finishOrderComponent_styles.text}>{price}$</Text>
                    </View>

                    <View style={finishOrderComponent_styles.rightCard}>
                        <Image style={finishOrderComponent_styles.image} source={photoLink === "" ?
                            {uri: "https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg?w=2000"}
                            : {uri: photoLink}}/>
                    </View>
                </View>

                <View style={finishOrderComponent_styles.containerButton}>
                    <Text style={finishOrderComponent_styles.amountText}>x{amount}</Text>
                    <LilButton text="REMOVE" color={MY_RED} action={"ORDER"} myIndex={myIndex} navigation={navigation}/>
                </View>

            </View>
            <Spacer/>
        </>
    );

}