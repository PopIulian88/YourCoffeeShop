import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Menu from "./Menu";
import Stock from "./Stock";
import Profile from "./Profile";
import {admin_styles} from "../../Style/Admin_style/Admin_styles";

const Tab = createBottomTabNavigator();

export default function Admin() {

    return (
        <Tab.Navigator initialRouteName={"Stock"} screenOptions={admin_styles.screenOptions}>
            <Tab.Screen options={admin_styles.menuOptions} name="Menu" component={Menu}/>
            <Tab.Screen options={admin_styles.stockOptions} name={"Stock"} component={Stock}/>
            <Tab.Screen options={admin_styles.profileOptions} name={"Profile"} component={Profile}/>
        </Tab.Navigator>
    );

}