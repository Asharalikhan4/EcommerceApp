import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { ProductPageRouteParams } from "./ProductTypes";

type ProductPageProps = {
    route: RouteProp<ProductPageRouteParams, "ProductPage">;
};

const ProductPage: React.FC<ProductPageProps> = ({ route }) => {
    const { imageUrl, name, price } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("../../../assets/images/Modal1.webp")} style={styles.image} />
            </View>
            <Text style={styles.name}>
                HIGHLANDER Men Olive Green & Black Slim Fit Checked Casual Shirt
            </Text>
            <Text style={styles.price}>₹428</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    imageContainer: {
        alignItems: "center",
    },
    image: {
        width: 600,
        height: 500,
        resizeMode: "contain",
        marginBottom: 20,
    },
    name: {
        fontSize: 16,
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        color: "#888",
        textAlign: "left",
    },
});

export default ProductPage;
