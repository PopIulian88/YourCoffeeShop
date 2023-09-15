import {Text, View, TouchableOpacity, Modal, Alert, Pressable, TextInput} from 'react-native';
import {lilButton_styles} from "../Style/Components_style/LilButton_styles";
import {useState} from "react";
import {modal_styles} from "../Style/Modal_styles";
import Spacer from "./Spacer";
import {MY_IP} from "../Help_Box/IP_help";


async function fetchDataDeleteStocks(id){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/stock/delete/" + id,
        {
            method: "DELETE",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return responseJson;
}

export default function LilButton({data, text="null", color="black", navigation, action="null"}) {

        const [modalVisible, setModalVisible] = useState(false);

        const [number, onChangeNumber] = useState('');

    return (
        <TouchableOpacity style={[lilButton_styles.container, {backgroundColor: color}]} onPress={() => {
            if(text === "ADD"){
                setModalVisible(true);
            }else if(text === "EDIT"){
                navigation.navigate("EditStock");
            }else{
                if (action === "STOCK") {
                    fetchDataDeleteStocks(data.id).then(r => {
                        console.log("SUCCES DELETE STOCK")
                        Alert.alert("Stock DELETE", "Please press the refresh button");
                    }).catch(e => {
                        console.log(e);
                    });
                }
            }
        }}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Fail to add stock");
                    setModalVisible(!modalVisible);
                }}>

                <View style={modal_styles.centeredView}>
                    <View style={modal_styles.modalView}>
                        <Text style={modal_styles.modalText}>Refile the stock!</Text>

                        <Spacer/>

                        <TextInput
                            style={modal_styles.inputBox}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Type how many"
                            keyboardType="numeric"
                        />

                        <Spacer/>

                        <TouchableOpacity style={modal_styles.saveChanges} onPress={() => {
                            setModalVisible(false);
                            onChangeNumber('');
                        }}>
                            <Text style={modal_styles.saveButton}>ADD</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </Modal>

            <Text style={lilButton_styles.text}>{text}</Text>
        </TouchableOpacity>

    );

}