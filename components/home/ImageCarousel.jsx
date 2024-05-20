import React, { useState } from "react";

//Icons
import { Ionicons, Fontisto } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { COLORS, SIZES } from "../../constants/index";

const ImageCarousel = ({ slides, activeCategory }) => {
  const width = Dimensions.get("window").width;

  const navigation = useNavigation();

  // const filteredProducts = slides.filter(
  //   (product) => product.category === activeCategory
  // );
  // const imageUrls = filteredProducts.map((product) => product.imageUrl);

  // const slides = [
  //   require("../../assets/images/Beef-Burger.jpg"),
  //   require("../../assets/images/Garden-Salad.jpg"),
  //   require("../../assets/images/Pork-rolls.jpg"),
  // ];

  //pagination
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleSlideChange = (index) => {
  //   setCurrentIndex(index);
  // };

  return (
    <View style={styles.carouselContainer}>
      <View style={styles.txtCon}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Products", { slides, activeCategory })
          }
          style={styles.text}
        >
          <Text style={styles.forwardIcon}>View All</Text>
          <Ionicons name="chevron-forward" size={22} color="black" />
        </TouchableOpacity>
      </View>

      <Carousel
        width={width}
        // pagingEnabled
        // onSnapToItem={handleSlideChange}
        height={width / 1.5}
        autoPlay
        data={slides}
        scrollAnimationDuration={3000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        snapEnabled
        loop
        renderItem={({ item }) => {
          if (typeof item === "string") {
            // External image URL

            return (
              <Image
                source={{ uri: item }}
                style={styles.image}
                resizeMode="cover"
              />
            );
          } else {
            // Local image
            return (
              <Image source={item} style={styles.image} resizeMode="cover" />
            );
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  // paginationContainer: {
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   color: COLORS.primary,
  // },
  text: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  forwardIcon: {
    fontSize: SIZES.small * 1.4,
    fontWeight: "medium",
    marginRight: 5,
    fontFamily: "medium",
  },
  txtCon: {
    width: SIZES.width,
  },
});

export default ImageCarousel;
