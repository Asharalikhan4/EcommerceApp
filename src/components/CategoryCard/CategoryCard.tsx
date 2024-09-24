import React, { FC } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { CategoryCardPropsTypes } from "./CategoryCardTypes";

const CategoryCard: FC<CategoryCardPropsTypes> = ({ title, imageUrl }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
            <Text style={styles.cardText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        alignItems: 'center',
        margin: 10,
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50, // Makes the image circular
        overflow: 'hidden', // Ensures the image doesn't overflow the container
        marginBottom: 10,
        borderWidth: 2,
        borderColor: 'tomato', // Optional: Add a border for the circular effect
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'gray',
    },
});

export default CategoryCard;