import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MenuScreen from "./MenuScreen";
import EditMenu from "./EditMenu";
import AddProduct from "./AddProduct";

const Stack = createNativeStackNavigator()

export default function Stock({navigation}) {
    return (
        <Stack.Navigator initialRouteName={"MenuScreen"}>
            <Stack.Screen options={{headerShown:false}} name="MenuScreen" component={MenuScreen}/>
            <Stack.Screen options={{headerShown:false}} name="EditMenu" component={EditMenu}/>
            <Stack.Screen options={{headerShown:false}} name="AddProduct" component={AddProduct}/>
        </Stack.Navigator>
    );

}