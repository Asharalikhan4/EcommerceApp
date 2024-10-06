import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { ProductPageRouteParams } from "./ProductTypes";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";

type ProductPageProps = {
    route: RouteProp<ProductPageRouteParams, "ProductPage">;
};

const ProductPage: React.FC<ProductPageProps> = ({ route }) => {
    const { imageUrl, name, price } = route.params;

    const handleAddToCart = () => {

    };

    const handleAddToWishlist = () => {

    };

    return (
        <Container>
            <View style={styles.imageContainer}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
            <View>
                <Text>*****</Text>
            </View>
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.price}>
                <View>
                    <Text>
                        Price: {price}
                    </Text>
                </View>
            </Text>
            <Container>
                <Button text="Add to Cart" onClick={handleAddToCart} style={styles.addToCartBtn} />
                <Button text="Add to Wishlist" onClick={handleAddToWishlist} style={styles.addToWishlistBtn} />
            </Container>
        </Container>
    );
};

const styles = StyleSheet.create({
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
        fontSize: 22,
        marginBottom: 10,
    },
    price: {
        fontSize: 20,
        color: "#888",
        textAlign: "left",
    },
    btnContainer: {
        gap: 10,
    },
    addToCartBtn: {
        textAlign: "center",
        backgroundColor: "#f0c14b",
        borderColor: "black",
        borderWidth: 2,
        padding: 10,
    },
    addToWishlistBtn: {
        textAlign: "center",
        borderColor: "black",
        borderWidth: 2,
        padding: 10,
    }
});

export default ProductPage;
