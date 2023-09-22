import {Image, Platform, Text, View} from 'react-native';
import {password_styles} from "../Style/Password_styles";
import {OtpInput} from 'react-native-otp-entry';
import TextButton from "../Components/TextButton";
import Spacer from "../Components/Spacer";
import {MaterialIcons} from "@expo/vector-icons";
import {DARK_GREEN} from "../Help_Box/Colors";
import {useState} from "react";

const CORECT_PASSWORD = "250804";

export default function Password({ navigation }) {
    const [password, setPassword] = useState("")

    return (
        <View style={password_styles.container}>
            <View style={password_styles.containerUp}>
                {
                    password === CORECT_PASSWORD ?
                        <MaterialIcons
                            name="lock-open"
                            size={100}
                            color={DARK_GREEN}
                            style={{alignSelf: "center"}}
                        /> : <MaterialIcons
                            name="lock"
                            size={100}
                            color="black"
                            style={{alignSelf: "center"}}
                        />
                }

                <View style={password_styles.textContainer}>
                    <Text style={password_styles.bigText}>Easy peasy</Text>
                    <Text style={password_styles.text}>Enter your 6-digit code</Text>
                </View>
                <OtpInput
                    numberOfDigits={6}
                    focusColor={DARK_GREEN}
                    onTextChange={text => setPassword(text)}
                    focusStickBlinkingDuration={500}
                />
            </View>

            <View style={password_styles.containerDown}>
                {
                    password === CORECT_PASSWORD ?
                        <TextButton text={"Let's go"} color={"green"} navigation={navigation} navTo={"Admin"}/> :
                        <TextButton text={"Let's go"} color={"black"} navigation={navigation} navTo={"ALERT"}/>
                }
                <Spacer/>
                <TextButton text={"Leave"} color={"#FF0000"} navigation={ navigation }/>
            </View>

        </View>
    );

}