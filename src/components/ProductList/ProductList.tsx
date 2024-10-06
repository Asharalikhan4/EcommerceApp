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
                <Button text="Shop Now" style={styles.button} onClick={viewAllHandler} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.productList}>
                    <ProductCard
                        imageUrl={"https://images.urbndata.com/is/image/FreePeople/83669218_021_a?$a15-category$&qlt=80&fit=constrain"}
                        name="Sweet Nothing Cardi"
                        price="$399.99"
                    />
                    <ProductCard
                        imageUrl={"https://images.urbndata.com/is/image/FreePeople/88686977_031_c?$a15-category$&qlt=80&fit=constrain"}
                        name="FP One Ravenna Printed Convertible Maxi Skirt"
                        price="$499.99"
                    />
                    <ProductCard
                        imageUrl={"https://images.urbndata.com/is/image/FreePeople/94894169_001_a?$a15-category$&qlt=80&fit=constrain"}
                        name="We The Free Total Eclipse Tee"
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