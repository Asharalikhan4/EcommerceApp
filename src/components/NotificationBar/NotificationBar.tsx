import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const NotificationBar: FC<NotificationBarPropsTypes> = ({ message }) => {
    return (
        message ? (
            <View style={styles.NotificationContainer}>
                <Text style={styles.NotificationText}>{message}</Text>
            </View>
        ) : (
            <View></View>
        )
    );
};

const styles = StyleSheet.create({
    NotificationContainer: {
        backgroundColor: "black",
        padding: 3,
    },
    NotificationText: {
        color: "white",
        textAlign: "center",
    },
});

export default NotificationBar;