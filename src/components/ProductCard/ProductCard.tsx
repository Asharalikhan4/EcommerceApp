import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, Dimensions, Pressable } from "react-native";

import HeartIcon from "../../../assets/svg/Heart.svg";

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
                        source={{ uri: imageUrl }}
                        style={styles.productImage}
                    />
                    {/* Heart emoji positioned at the top-right corner */}
                    <View style={styles.heartContainer}>
                        <Text style={styles.heartText}>
                            <HeartIcon width={30} height={30} />
                        </Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.productName}>{name}</Text>
                        <Text style={styles.productPrice}>{price}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginRight: 8,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 20,
        overflow: "hidden",
        width: width * 0.45, // 90% of the screen width
        alignSelf: "center",
    },
    imageContainer: {
        width: "100%",
        height: width * 0.7, // 60% of the screen width for a nice height-to-width ratio
        position: "relative", // Required for absolute positioning inside
    },
    productImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    heartContainer: {
        position: "absolute",
        top: 10, // Padding from top
        right: 10, // Padding from right
        backgroundColor: "rgba(255, 255, 255, 0.7)", // Background to make the heart visible
        borderRadius: 20,
        padding: 5,
    },
    heartText: {
        fontSize: 20, // Adjust size for emoji
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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
