import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR, DARK_GREEN, MY_GRAY} from "../../Help_Box/Colors";
import {FontAwesome5, MaterialIcons} from "@expo/vector-icons";

export const admin_styles = StyleSheet.create({
    screenOptions: {
        tabBarStyle:{
            backgroundColor: BACKGROUND_COLOR,
        },

        // tabBarItemStyle:{
        //     backgroundColor:'#00ff00',
        //     margin:5,
        //     borderRadius:10,
        // }

        tabBarActiveTintColor: DARK_GREEN,
        activeTintColor: DARK_GREEN,

        tabBarInactiveTintColor: MY_GRAY,
    },

    menuOptions: {
        headerShown:false,

        tabBarIcon: ({focused}) => (
            <MaterialIcons name='menu-book' size={25} color={focused ? DARK_GREEN : MY_GRAY} />
        ),
    },

    stockOptions: {
        headerShown:false,

        tabBarIcon: ({focused}) => (
            <FontAwesome5 name='boxes' size={25} color={focused ? DARK_GREEN : MY_GRAY}/>
        ),
    },

    profileOptions: {
        headerShown:false,

        tabBarIcon: ({focused}) => (
            <FontAwesome5 name='house-user' size={25} color={focused ? DARK_GREEN : MY_GRAY}/>
        ),
    },

});