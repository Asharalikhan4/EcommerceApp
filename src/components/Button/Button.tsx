import { FC } from "react";
import { View, Text, Pressable } from "react-native";

const Button: FC<ButtonPropsTypes> = ({ text, style, onClick }) => {
    return (
        <View>
            <Pressable onPress={onClick}>
                <Text style={[style]}>
                    {text}
                </Text>
            </Pressable>
        </View>
    );
};

export default Button;