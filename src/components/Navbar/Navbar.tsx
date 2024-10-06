import { FC, useState } from "react";
import { StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Input from "../Input/Input";

import HeartIcon from "../../../assets/svg/Heart.svg";
import CartNewIcon from "../../../assets/svg/CartNew.svg";
import HamburgerMenuIcon from "../../../assets/svg/HamburgerMenu.svg";

const Navbar: FC = () => {

    const navigation = useNavigation();

    const [searchText, setSearchText] = useState<string>("");

    const handleSearch = (text: string) => {
        setSearchText(text);
    };

    const handleCartClick = () => {
        navigation.navigate("Cart");
    };

    return (
        <View style={styles.navbarContainer}>
            <View>
                <Input style={styles.inputBox} text="Search" value={searchText} onChange={handleSearch} />
            </View>
            <View style={styles.iconsContainer}>
                <HeartIcon width={40} height={32} />
                <Pressable onPress={handleCartClick}>
                    <CartNewIcon width={40} height={40} />
                </Pressable>
                <HamburgerMenuIcon width={40} height={40} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbarContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    inputBox: {
        width: 250,
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "black",
    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
    }
});

export default Navbar;