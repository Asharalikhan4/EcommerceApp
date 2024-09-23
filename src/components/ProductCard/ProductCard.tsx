import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, Dimensions, Pressable } from "react-native";

const { width } = Dimensions.get("window");

const ProductCard: FC<ProductCardPropsTypes> = ({ imageUrl, name, price }) => {

    const navigation = useNavigation();

    const productCardPressHandler = () => {
        navigation.navigate("ProductDetails", { imageUrl, name, price });
    };

    return (
        <Pressable onPress={productCardPressHandler}>
            <View style={styles.cardContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../../../assets/images/MorisChair.webp")}
                        style={styles.productImage}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.productName}>{name}</Text>
                    <Text style={styles.productPrice}>{price}</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        margin: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 20,
        overflow: "hidden",
        width: width * 0.4, // 90% of the screen width
        alignSelf: "center",
    },
    imageContainer: {
        width: "100%",
        height: width * 0.5, // 60% of the screen width for a nice height-to-width ratio
    },
    productImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    textContainer: {
        padding: 15,
    },
    productName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        color: "#888",
    },
});

export default ProductCard;
