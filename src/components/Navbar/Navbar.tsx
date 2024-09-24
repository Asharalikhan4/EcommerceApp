import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const Navbar: FC = () => {
    return (
        <View style={styles.navbarContainer}>
            <View>
                <Text>2</Text>
            </View>
            <View>
                <Text>Logo</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbarContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 18,
        backgroundColor: "#db7093"
    },
});

export default Navbar;