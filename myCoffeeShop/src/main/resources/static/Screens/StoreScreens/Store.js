import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Shop from "./Shop";
import Table from "./Table";
import FinishOrder from "./FinishOrder";
import Checkout from "./Checkout";
import {useContext, useEffect} from "react";
import {MyContext} from "../../Context/MyContext";
import {fetchDataGetStoreTable, fetchDatainitStoreTables} from "../../Help_Box/API_calls";


const Stack = createNativeStackNavigator()

export default function Store() {

    const {tablesData, setTablesData} = useContext(MyContext)


    useEffect(() => {
        fetchDatainitStoreTables().then(response => {

            fetchDataGetStoreTable().then(response => {
                setTablesData(response);
            })

        }).catch(e => console.log(e));

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