import { FC } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import NotificationBar from "../../components/NotificationBar/NotificationBar";
import ProductList from "../../components/ProductList/ProductList";
import AppCarousel from "../../components/AppCarousel/AppCarousel";
import Navbar from "../../components/Navbar/Navbar";
import Categories from "../../components/Categories/Categories";

const HomeScreen: FC<any> = ({ navigation, route }) => {

    function pressHandler() {
        console.log("Move to Signup Screen");
        navigation.navigate("Signup");
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <NotificationBar message="Elevate Your Style!" />
                {/* <Navbar /> */}
                <AppCarousel />
                <Categories />
                <ProductList heading="New Arrivals" />
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