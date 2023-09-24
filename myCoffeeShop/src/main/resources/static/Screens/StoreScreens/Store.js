import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Shop from "./Shop";
import Table from "./Table";
import FinishOrder from "./FinishOrder";
import Checkout from "./Checkout";
import {MY_IP} from "../../Help_Box/IP_help";
import {useContext, useEffect} from "react";
import {MyContext} from "../../Context/MyContext";


const Stack = createNativeStackNavigator()

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

export default function Store() {

    const {tablesData, setTablesData} = useContext(MyContext)


    useEffect(() => {
        fetchDatainitStoreTables().then(response => {
            // console.log("Mesele sunt facute");

            fetchDataGetStoreTable().then(response => {
                setTablesData(response);
            })

        }).catch(e => console.log(e));

        // console.log(stocksData);
    }, [])

    return (
        <Stack.Navigator initialRouteName={"Shop"}>
            <Stack.Screen options={{headerShown:false}} name="Shop" component={Shop}/>
            <Stack.Screen options={{headerShown:false}} name={"Table"} component={Table}/>
            <Stack.Screen options={{headerShown:false}} name={"FinishOrder"} component={FinishOrder}/>
            <Stack.Screen options={{headerShown:false}} name={"Checkout"} component={Checkout}/>
        </Stack.Navigator>
    );

}