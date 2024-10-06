import { FC } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View ,Image } from "react-native";
import NotificationBar from "../../components/NotificationBar/NotificationBar";
import ProductList from "../../components/ProductList/ProductList";
import AppCarousel from "../../components/AppCarousel/AppCarousel";
import Navbar from "../../components/Navbar/Navbar";
import Categories from "../../components/Categories/Categories";
import ImageCard from "../../components/ImageCard/ImageCard";

const HomeScreen: FC<any> = ({ navigation, route }) => {

    function pressHandler() {
        console.log("Move to Signup Screen");
        navigation.navigate("Signup");
    };

    return (
        <SafeAreaView>
            <ScrollView>
                
                <Navbar />
                {/* <AppCarousel /> */}
                {/* <Categories /> */}
                <NotificationBar message="Elevate Your Style!" />
                <ImageCard category="Women" imageUrl="https://images.riverisland.com/image/upload/f_auto,q_auto/0_20240919_161ECOM24_WK39_HP_HERO_MOBILE.jpg?cb&$mobile$" />
                <ImageCard category="Men" imageUrl="https://images.riverisland.com/image/upload/f_auto,q_auto/0_20240926_161ECOM24_WK39_HP_FT_MW_MOB.jpg?cb&$mobile$" />
                <ImageCard category="Kids" imageUrl="https://images.riverisland.com/image/upload/f_auto,q_auto/0_20240925_161ECOM24_WK39_HP_KW_FT_MOBILE.jpg?cf&$mobile$" />
                <ProductList heading="See What's New" />
                <ProductList heading="Mens" />
                <ProductList heading="Womens" />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 50,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default HomeScreen;