import React, { useState } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { COLORS, SIZES } from "../../constants/index";

const ImageCarousel = () => {
  const width = Dimensions.get("window").width;

  const slides = [
    require("../../assets/images/1.jpg"),
    require("../../assets/images/2.jpg"),
    require("../../assets/images/3.jpg"),
  ];

  //pagination
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleSlideChange = (index) => {
  //   setCurrentIndex(index);
  // };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        width={width}
        // pagingEnabled
        // onSnapToItem={handleSlideChange}
        height={width / 2}
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
        renderItem={({ item }) => (
          <Image source={item} style={styles.image} resizeMode="cover" />
        )}
      />
      {/* //pagination
      <View style={styles.paginationContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex ? styles.activeDot : null,
            ]}
          />
        ))}
      </View> */}
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
    borderRadius: 10,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 3,
  },
  //pagination
  // paginationDot: {
  //   width: 5,
  //   height: 5,
  //   borderRadius: 4,
  //   backgroundColor: COLORS.gray,
  //   marginHorizontal: 5,
  // },
  // activeDot: {
  //   backgroundColor: COLORS.primary, // Change color for active dot
  // },
});

export default ImageCarousel;
