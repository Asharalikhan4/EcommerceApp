import { FC } from "react";
import { View, StyleSheet } from "react-native";

const Container: FC<any> = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 10,
        paddingHorizontal: 8,
    },
});

export default Container;