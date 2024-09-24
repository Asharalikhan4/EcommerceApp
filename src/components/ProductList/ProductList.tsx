import { FC } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ProductCard from "../ProductCard/ProductCard";
import Button from "../Button/Button";

const ProductList: FC<ProductListPropsTypes> = ({ heading }) => {

    const navigation = useNavigation();

    const viewAllHandler = () => {
        console.log("View All");
        navigation.navigate("Products", { productsHeading: heading });
    };

    return (
        <View style={styles.productListContainer}>
            <View style={styles.productListHeadingContainer}>
                <Text style={styles.producListHeading}>{heading}</Text>
                <Button text="View All" style={styles.button} onClick={viewAllHandler} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.productList}>
                    <ProductCard
                        imageUrl={"ashar"}
                        name="Moris Chair"
                        price="$399.99"
                    />
                    <ProductCard
                        imageUrl={"ashar"}
                        name="Leather Chair"
                        price="$499.99"
                    />
                    <ProductCard
                        imageUrl={"ashar"}
                        name="Modern Chair"
                        price="$299.99"
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    productListContainer: {
        marginHorizontal: 10,
    },
    productList: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    productListHeadingContainer: {
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    producListHeading: {
        fontSize: 24,
        fontWeight: "bold",
    },
    button: {
        fontWeight: "bold",
    },
});

export default ProductList;