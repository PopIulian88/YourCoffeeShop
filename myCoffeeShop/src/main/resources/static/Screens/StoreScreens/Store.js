import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Shop from "./Shop";
import Table from "./Table";
import FinishOrder from "./FinishOrder";
import Checkout from "./Checkout";

const Stack = createNativeStackNavigator()

export default function Store() {
    return (
        <Stack.Navigator initialRouteName={"Shop"}>
            <Stack.Screen options={{headerShown:false}} name="Shop" component={Shop}/>
            <Stack.Screen options={{headerShown:false}} name={"Table"} component={Table}/>
            <Stack.Screen options={{headerShown:false}} name={"FinishOrder"} component={FinishOrder}/>
            <Stack.Screen options={{headerShown:false}} name={"Checkout"} component={Checkout}/>
        </Stack.Navigator>
    );

}