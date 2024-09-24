import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { StyleSheet } from 'react-native';
import Toast from "react-native-toast-message";

import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import SearchScreen from "./src/Screens/SearchScreen/SearchScreen";
import SignupScreen from "./src/Screens/SignupScreen/SignupScreen";
import SigninScreen from "./src/Screens/SigninScreen/SigninScreen";
import ProductScreen from "./src/Screens/ProductScreen/ProductScreen";
import CartScreen from "./src/Screens/CartScreen/CartScreen";
import ProductsScreen from "./src/Screens/ProductsScreen/ProductsScreen";

import SearchIcon from "./assets/svg/Search.svg";
import UserIcon from "./assets/svg/User.svg";
import CartIcon from "./assets/svg/Cart.svg";
import CategoriesScreen from "./src/Screens/CategoriesScreen/CategoriesScreen";

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="ProductDetails" component={ProductScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
    </Stack.Navigator>
  )
};

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="HomeTab"
          screenOptions={{
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          }}>
          <Tab.Screen
            name="HomeMain"
            component={HomeStack}
            options={{ headerShown: false, tabBarLabel: "Home" }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{ headerShown: true, tabBarLabel: "Search", tabBarIcon: () => <SearchIcon width={25} /> }}
          />
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{ tabBarLabel: "Cart", tabBarIcon: () => <CartIcon size={20} /> }}
          />
          <Tab.Screen
            name="SignUp"
            component={SignupScreen}
            options={{ tabBarLabel: "Sign Up", tabBarIcon: () => <UserIcon /> }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
});

export default App;
