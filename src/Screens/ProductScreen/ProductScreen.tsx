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
            <Image source={require("../../../assets/images/MorisChair.webp")} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        color: "#888",
    },
});

export default ProductPage;
