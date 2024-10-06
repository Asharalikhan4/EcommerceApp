import { FC } from "react";
import { TextInput, StyleSheet } from "react-native";

const Input: FC<InputPropsTypes> = ({ text, value, onChange, style }) => {
    return (
        <TextInput
            style={[styles.input, style]}
            placeholder={text}
            defaultValue={value}
            onChangeText={onChange}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        // width: 300,
        // height: 50,
        // margin: 10,
        // padding: 10,
        // borderWidth: 1,
        // borderRadius: 5,
        // borderColor: "black",
    },
});

export default Input;