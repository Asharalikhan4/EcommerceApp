import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../Button/Button";

const AddToCart: FC = () => {

    const addToCartHandler = () => {
        console.log("Added to Cart");
    };

    return (
        <View>
            <Button text="Add" onClick={addToCartHandler} style={styles.addToCartButtonContainer} />
        </View>
    );
};

const styles = StyleSheet.create({
    addToCartButtonContainer: {
        backgroundColor: "#ff5c5c",
        padding: 10,
        borderRadius: 10,
    },
});

export default AddToCart;