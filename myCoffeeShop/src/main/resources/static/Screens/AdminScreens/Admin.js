import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Menu from "./Menu";
import Stock from "./Stock";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

export default function Admin() {
    return (
        <Tab.Navigator initialRouteName={"Stock"}>
            <Tab.Screen options={{headerShown:false}} name="Menu" component={Menu}/>
            <Tab.Screen options={{headerShown:false}} name={"Stock"} component={Stock}/>
            <Tab.Screen options={{headerShown:false}} name={"Profile"} component={Profile}/>
        </Tab.Navigator>
    );

}