import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import ProductCard from "../ProductCard/ProductCard";

const ProductList: FC<ProductListPropsTypes> = ({ heading }) => {
    return (
        <View>
            <Text style={styles.producListHeading}>{heading}</Text>
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
        </View>
    );
};

const styles = StyleSheet.create({
    productList: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    producListHeading: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 10,
        marginLeft: 10,
    }
});

export default ProductList;