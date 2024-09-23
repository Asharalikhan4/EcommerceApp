import { FC } from "react";
import { View, Text, Image } from "react-native";

const Carousel: FC = () => {
    return (
        <View>
            <Image 
                source={require("../../../assets/images/carousel2.jpeg")}
                style={{ width: 500, height: 250 }} />
        </View>
    );
};

export default Carousel;