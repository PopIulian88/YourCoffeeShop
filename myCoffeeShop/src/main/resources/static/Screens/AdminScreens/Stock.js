import {createNativeStackNavigator} from "@react-navigation/native-stack";
import StockScreen from "./StockScreen";
import EditStock from "./EditStock";
import AddStock from "./AddStock";

const Stack = createNativeStackNavigator()

export default function Stock({navigation}) {
    return (
        <Stack.Navigator initialRouteName={"StockScreen"}>
            <Stack.Screen options={{headerShown:false}} name="StockScreen" component={StockScreen}/>
            <Stack.Screen options={{headerShown:false}} name="EditStock" component={EditStock}/>
            <Stack.Screen options={{headerShown:false}} name="AddStock" component={AddStock}/>
        </Stack.Navigator>
    );

}