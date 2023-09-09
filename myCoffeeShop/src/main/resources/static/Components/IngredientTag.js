import {Text, TouchableOpacity, View} from "react-native";
import {ingredientTag_styles} from "../Style/Components_style/IngredientTag_styles";
import {Feather} from "@expo/vector-icons";
import Spacer from "./Spacer";
import {DARK_GREEN, MY_RED} from "../Help_Box/Colors";


export default function IngredientTag({text="null", cantiti=0}) {
    return (
        <View style={ingredientTag_styles.container}>
            <Text style={ingredientTag_styles.text}>{text}</Text>
            <Text style={[ingredientTag_styles.text, {color:DARK_GREEN}]}>  {cantiti}</Text>

            <Spacer height={5}/>

            <TouchableOpacity onPress={() => {
                alert("Delete")
            }}>
                <Feather
                    name="x"
                    size={20}
                    color="white"
                    style={ingredientTag_styles.xButton}
                />
            </TouchableOpacity>
        </View>
    );

}