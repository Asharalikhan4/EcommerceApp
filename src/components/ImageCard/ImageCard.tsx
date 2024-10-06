import React, { FC } from "react";
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, Alert, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ImageCardPropsTypes } from "./ImageCardTypes";

const ImageCard: FC<ImageCardPropsTypes> = ({ category, imageUrl }) => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window'); // Get screen width and height

  const handleButtonPress = () => {
    Alert.alert("Button Pressed", "You pressed the Women button!"); // Example action on button press
  };

  const imageCardPressHandler = () => {
    navigation.navigate("Categories", { category });
  };

  return (
    <Pressable onPress={imageCardPressHandler}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={[styles.image, { width, height: height / 3 }]} // Full screen width, 1/3 screen height
        />
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>{category}</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "cover", // Scale image properly
  },
  button: {
    position: "absolute", // Position the button absolutely inside the image
    top: "50%", // Center it vertically
    left: "50%", // Center it horizontally
    transform: [{ translateX: -50 }, { translateY: -20 }], // Adjust for the button's size
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white", // White text color
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ImageCard;
