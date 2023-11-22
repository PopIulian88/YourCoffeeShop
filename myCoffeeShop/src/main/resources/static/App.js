import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Welcome from "./Screens/Welcome";
import Password from "./Screens/Password";
import Admin from "./Screens/AdminScreens/Admin";
import Store from "./Screens/StoreScreens/Store";
import {MyContext} from "./Context/MyContext";
import {useEffect, useState} from "react";
import {
    fetchDataGetStocks,
    fetchDataGetStoreTable,
    fetchDataInitProfile,
    fetchDatainitStoreTables
} from "./Help_Box/API_calls";

const Stack = createNativeStackNavigator()

export default function App() {

    const [stocksData, setStocksData] = useState([]);
    const [stockToEdit, setStockToEdit] = useState({});
    const [productData, setProductData] = useState([]);
    const [productToEdit, setProductToEdit] = useState({});
    const [profitData, setProfitData] = useState([]);
    const [tablesData, setTablesData] = useState([]);
    const [tableToEdit, setTableToEdit] = useState({});


    useEffect(() => {
        fetchDataGetStocks().then(respons => {
            setStocksData(respons)
        });

        fetchDataInitProfile(0, []).then(respons => {

        });

        fetchDatainitStoreTables().then(respons => {

        });

        fetchDataGetStoreTable().then(response => {
            setTablesData(response);
        })

    }, [])


        return (
            <MyContext.Provider value={{
                stocksData, setStocksData,
                stockToEdit, setStockToEdit,
                productData, setProductData,
                productToEdit, setProductToEdit,
                profitData, setProfitData,
                tablesData, setTablesData,
                tableToEdit, setTableToEdit
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


