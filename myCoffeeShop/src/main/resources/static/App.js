import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';



const baseURL = "http://localhost:8080/test";

let myTEXT = "FAT";

async function fetchData(){
    console.log("START")
  const responseJson = await fetch(
      baseURL,
      {
        method: "GET",
        headers: {
          'Content-Type' : 'application/text'
        },
      });

    myTEXT = await responseJson.json();
    console.log("---->" + myTEXT);

  if(responseJson.ok){
    console.log(myTEXT);
  }else{
    console.log("an error has ocurred");
  }
}

export default function App() {
        return (
            <View style={styles.container}>
                <Text>{myTEXT}</Text>
                <Button title={"Schimba"} onPress={() => {fetchData().then(() => console.log(myTEXT))}}/>
                <StatusBar style="auto"/>
            </View>
        );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
