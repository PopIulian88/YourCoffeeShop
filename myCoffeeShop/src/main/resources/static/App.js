import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Welcome from "./Screens/Welcome";
import Password from "./Screens/Password";
import Admin from "./Screens/AdminScreens/Admin";
import Store from "./Screens/StoreScreens/Store";
import {MyContext} from "./Context/MyContext";
import {useEffect, useState} from "react";
import {MY_IP} from "./Help_Box/IP_help";

const Stack = createNativeStackNavigator()

async function fetchDataGetStocks(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/stocks",
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return await responseJson.json();
}

export default function App() {

    const [stocksData, setStocksData] = useState([]);
    const [stockToEdit, setStockToEdit] = useState({});
    const [productData, setProductData] = useState([]);


    useEffect(() => {
        fetchDataGetStocks().then(respons => {
            setStocksData(respons)
        })
        console.log(stocksData);
    }, [])


        return (
            <MyContext.Provider value={{
                stocksData, setStocksData,
                stockToEdit, setStockToEdit,
                productData, setProductData
            }}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={"Welcome"}>
                        <Stack.Screen options={{headerShown:false}} name="Welcome" component={Welcome}/>
                        <Stack.Screen options={{headerShown:false}} name={"Password"} component={Password}/>
                        <Stack.Screen options={{headerShown:false}} name={"Admin"} component={Admin}/>
                        <Stack.Screen options={{headerShown:false}} name={"Store"} component={Store}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </MyContext.Provider>
        );

}


