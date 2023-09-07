import {Text, View} from 'react-native';
import {profitCard_styles} from "../Style/Components_style/ProfitCard_styles";
import {LITE_GREEN, LITE_RED} from "../Help_Box/Colors";
import Spacer from "./Spacer";

export default function ProfitCard({money=0, text="Profit"}) {
    return (
        <>
            <Spacer/>

        <View style={[profitCard_styles.container, text ==="Profit" ? { backgroundColor: LITE_GREEN} :
                                                                        {backgroundColor: LITE_RED}]}>
            <Text style={profitCard_styles.text}>{money} $</Text>
            <Text style={profitCard_styles.text}>{text}</Text>

        </View>
        </>
    );

}