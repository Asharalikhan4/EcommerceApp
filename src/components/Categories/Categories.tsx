import React, { FC } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CategoryCard from "../CategoryCard/CategoryCard";
import Button from "../Button/Button";

const Categories: FC = () => {

    const navigation = useNavigation();

    const viewAllHandler = () => {
        console.log("View All");
        navigation.navigate("Categories");
    };

    return (
        <View style={styles.categoriesContainer}>
            <View style={styles.categoriesHeadingContainer}>
                <Text style={styles.heading}>Categories</Text>
                <Button text="View All" style={styles.button} onClick={viewAllHandler} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categoriesCardContainer}>
                    <CategoryCard title="Women" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-12.webp" />
                    <CategoryCard title="Men" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-01.webp" />
                    <CategoryCard title="Kids" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-02.webp" />
                    <CategoryCard title="New Arrivals" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-04.webp" />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    categoriesContainer: {
        marginHorizontal: 10,
    },
    categoriesHeadingContainer: {
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
    },
    categoriesCardContainer: {
        flexDirection: "row",
    },
    button: {
        fontWeight: "bold",
    },
});

export default Categories;