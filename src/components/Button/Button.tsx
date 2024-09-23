import { FC } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Button: FC<ButtonPropsTypes> = ({ text, style, onClick }) => {
    return (
        <View style={[style]}>
            <Pressable onPress={onClick}>
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        textAlign: "center",
    }
});

export default Button;