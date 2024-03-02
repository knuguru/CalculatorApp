import { useContext } from "react";
import { Styles } from "../styles/GlobalStyles";
import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
}

export default function Button({ title, onPress, isBlue, isGray }: ButtonProps) {
    return (
        <TouchableOpacity style={isBlue ? Styles.buttonBlue : isGray ? Styles.buttonGray : Styles.buttonWhite} onPress={onPress}>
            <Text style={Styles.smallText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}