import React, { FC } from "react";
import { SafeAreaView, View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-svg";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

const CategoriesScreen: FC = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.categoriesScreenContainer}>
                    <View style={styles.categoriesContainer}>
                        <CategoryCard title="Women" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-12.webp" />
                        <CategoryCard title="Men" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-01.webp" />
                        <CategoryCard title="Kids" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-02.webp" />
                        <CategoryCard title="New Arrivals" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-04.webp" />
                        <CategoryCard title="Women" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-12.webp" />
                        <CategoryCard title="Men" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-01.webp" />
                        <CategoryCard title="Kids" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-02.webp" />
                        <CategoryCard title="New Arrivals" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-04.webp" />
                        <CategoryCard title="Women" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-12.webp" />
                        <CategoryCard title="Men" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-01.webp" />
                        <CategoryCard title="Kids" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-02.webp" />
                        <CategoryCard title="New Arrivals" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-04.webp" />
                        <CategoryCard title="Women" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-12.webp" />
                        <CategoryCard title="Men" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-01.webp" />
                        <CategoryCard title="Kids" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-02.webp" />
                        <CategoryCard title="New Arrivals" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-04.webp" />
                        <CategoryCard title="Women" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-12.webp" />
                        <CategoryCard title="Men" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-01.webp" />
                        <CategoryCard title="Kids" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-02.webp" />
                        <CategoryCard title="New Arrivals" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-04.webp" />
                        <CategoryCard title="Women" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-12.webp" />
                        <CategoryCard title="Men" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-01.webp" />
                        <CategoryCard title="Kids" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-02.webp" />
                        <CategoryCard title="New Arrivals" imageUrl="https://d1yg8ocdjexswl.cloudfront.net/media/wysiwyg/shades_of_style/ShadesOfStyle-InstagramStoryLayout-04.webp" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    categoriesScreenContainer: {
        padding: 10,
    },
    categoriesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
});

export default CategoriesScreen;