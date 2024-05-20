import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import styles from "./categories.style";

import { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import useFetch from "../../hook/useFetch";

import { COLORS } from "../../constants";

const Categories = ({ setSlides, setActiveCategory, activeCategory }) => {
  const navigation = useNavigation();

  const { data, isLoading, error } = useFetch();

  const carouselImgs = (category) => {
    const filteredProducts = data.filter(
      (product) => product.category === category
    );
    const imageUrls = filteredProducts.map((product) => product.imageUrl);

    setSlides(imageUrls);
    setActiveCategory(category);
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <EvilIcons name="spinner-3" size={24} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => carouselImgs("Burgers")}>
        <View
          style={[
            styles.container,
            activeCategory === "Burgers" && styles.activeContainer,
          ]}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/Thumbnail/Burger.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>
              Burgers
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => carouselImgs("Rolls")}>
        <View
          style={[
            styles.container,
            activeCategory === "Rolls" && styles.activeContainer,
          ]}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/Thumbnail/Rolls.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>
              Rolls
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => carouselImgs("Salads")}>
        <View
          style={[
            styles.container,
            activeCategory === "Salads" && styles.activeContainer,
          ]}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/Thumbnail/Salads.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>
              Salads
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Categories;
