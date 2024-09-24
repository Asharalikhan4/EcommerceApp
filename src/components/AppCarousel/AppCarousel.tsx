import { FC, useState, useRef } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Carousel from "../../utils/Carousel/Carousel";

const images = [
    "https://assets.ajio.com/cms/AJIO/WEB/20092024-D-UHP-mainbanner-HM-1440x470.jpg", 
    "https://f.nooncdn.com/mpcms/EN0001/assets/9c3b0e31-7fbb-425c-8af6-4e02e1b80dfc.png?format=png", 
    "https://f.nooncdn.com/mpcms/EN0001/assets/df7d885f-01cf-46c9-afcb-a5001e60efaf.png?format=png"
];


const AppCarousel: FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Carousel images={images} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default AppCarousel;