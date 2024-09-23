import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import SearchScreen from "./src/Screens/SearchScreen/SearchScreen";
import SignupScreen from "./src/Screens/SignupScreen/SignupScreen";
import SigninScreen from "./src/Screens/SigninScreen/SigninScreen";
import ProductScreen from "./src/Screens/ProductScreen/ProductScreen";
import CartScreen from "./src/Screens/CartScreen/CartScreen";

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="ProductDetails" component={ProductScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  )
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <NavigationContainer>
    //     <Stack.Navigator initialRouteName="Home">
    //       <Stack.Screen name="Home" component={HomeScreen} />
    //       <Stack.Screen name="Search" component={SearchScreen} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </SafeAreaView>
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomeTab"
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        }}>
        <Tab.Screen
          name="HomeMain"
          component={HomeStack}
          options={{ headerShown: false, tabBarLabel: "HomeMain" }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: true, tabBarLabel: "Search" }}
        />
        <Tab.Screen
          name="SignUp"
          component={SignupScreen}
          options={{ tabBarLabel: "Sign Up" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

export default App;
