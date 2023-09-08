import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {finishOrder_styles} from "../../Style/Store_style/FinishOrder_styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {DARK_GREEN, MY_RED} from "../../Help_Box/Colors";
import Spacer from "../../Components/Spacer";
import OrderTableComponent from "../../Components/OrderTableComponent";
import BottomButton from "../../Components/BottomButton";
import FinishOrderComponent from "../../Components/FinishOrderComponent";

export default function FinishOrder({nr=1, navigation}) {
    return (
        <View style={finishOrder_styles.container}>
            <View style={finishOrder_styles.containerUp}>
                <View style={finishOrder_styles.containerUpText}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack();
                    }}>
                        <MaterialCommunityIcons
                            name="keyboard-backspace"
                            size={40}
                            color={MY_RED}
                            style={finishOrder_styles.backIcon}
                        />
                    </TouchableOpacity>

                    <View style={{flexDirection: "row"}}>
                        <Text style={finishOrder_styles.title}>Finish Order</Text>
                        <Text style={[finishOrder_styles.title, {color: DARK_GREEN}]}> #{nr}</Text>
                    </View>
                    <Image source={require("../../Poze/Logo.png")} style={finishOrder_styles.logo}/>
                </View>

                <Spacer height={10}/>
                <View style={finishOrder_styles.blackLine}></View>

            </View>

            <ScrollView style={finishOrder_styles.containerScrollView} contentContainerStyle={{alignItems: "center"}} >
                <FinishOrderComponent name={"Ice Coffee"} price={12} amount={2} navigation={navigation}
                                      photoLink="https://images.immediate.co.uk/production/volatile/sites/2/2021/08/coldbrew-iced-latte-with-my-recipe-photo-by-@ellamiller_photo-f1e3d9e.jpg?quality=90&resize=556,505"/>

                <FinishOrderComponent name={"Latte"} price={7} amount={1} navigation={navigation}
                                      photoLink="https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg"/>

                <FinishOrderComponent />

                <FinishOrderComponent />
            </ScrollView>

            <BottomButton text="Place order" navigation={navigation} navTo={"Shop"}/>
        </View>
    );

}