import React, { FC } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { ProductsScreenPropsTypes } from "./ProductsScreenTypes";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductsScreen: FC<ProductsScreenPropsTypes> = ({ route }) => {
    return (
        <SafeAreaView>
            <View style={styles.productsScreenContainer}>
                <View>
                    <Text style={styles.productsHeading}>{route?.params?.productsHeading}</Text>
                </View>
                <ScrollView>
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
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    productsScreenContainer: {
        marginHorizontal: 8,
        marginTop: 10,
    },
    productsHeading: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    productsContainer: {
        marginTop: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
});

export default ProductsScreen;