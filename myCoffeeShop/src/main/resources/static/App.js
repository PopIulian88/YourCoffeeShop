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


async function fetchDataInitProfile(curentProfit, historic){

    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/initProfile",
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "curentProfit": curentProfit,
                "historic": historic
            })
        });


    // if(responseJson.ok){
    //     console.log("Salvare corecta");
    // }else{
    //     console.log("Add PRODUCT fail");
    // }
}

async function fetchDataGetProfit(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/profits",
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return await responseJson.json();
}

async function fetchDataGetStoreTable(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/StoreTables",
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return await responseJson.json();
}

async function fetchDatainitStoreTables(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/initStoreTable",
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
        });

    return responseJson;
}

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

        // console.log(stocksData);
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


