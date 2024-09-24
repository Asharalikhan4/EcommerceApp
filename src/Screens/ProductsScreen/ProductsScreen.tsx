import React, { FC } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { ProductsScreenPropsTypes } from "./ProductsScreenTypes";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductsScreen: FC<ProductsScreenPropsTypes> = ({ route }) => {
    return (
        <SafeAreaView>
            <View style={styles.productsScreenContainer}>
                <View>
                    <Text style={styles.productsHeading}>{route?.params?.productsHeading}</Text>
                </View>
                <View style={styles.productsContainer}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    productsScreenContainer: {
        marginHorizontal: 10,
        marginTop: 10,
    },
    productsHeading: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    productsContainer: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
});

export default ProductsScreen;