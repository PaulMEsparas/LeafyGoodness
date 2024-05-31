import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./productDetails.style";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

import { COLORS, SIZES } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

//consume data passed from navigation.navigate
import { useRoute } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import { addToCart } from "../components/cart/CartReducer";

import { useState } from "react";

import Toast from "react-native-toast-message";

export default function ProductDetails({ navigation }) {
  const [count, setCount] = useState(1);

  //get data passed from navigation.navigate
  const route = useRoute();
  const { item } = route.params;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Create the updated item object with the new quantity
    const updatedItem = { ...item, quantity: count };

    // Dispatch the updated item to the Redux store
    dispatch(addToCart(updatedItem));
    Toast.show({
      type: "success",
      text1: "Success",
      text2: "Added to cart successfully",
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" color={COLORS.green} size={30} />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <LinearGradient
          colors={[
            "rgba(248,248,255,0.5984768907563025)",
            "rgba(0,100,0,0.5984768907563025)",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <View style={styles.titleRow}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>₱ {item.price}</Text>
            </View>
          </View>
          <View style={styles.ratingRow}>
            <View style={styles.rating}>
              {[1, 2, 3, 4, 5].map((index) => (
                <Ionicons key={index} name="star" size={24} color={"gold"} />
              ))}
              <Text style={styles.ratingText}> (4.9)</Text>
            </View>
            <View style={styles.rating}>
              <TouchableOpacity onPress={() => setCount((prev) => prev + 1)}>
                <SimpleLineIcons name="plus" size={16} />
              </TouchableOpacity>
              <Text style={styles.ratingText}>{count}</Text>
              <TouchableOpacity
                onPress={() => {
                  if (count > 1) {
                    setCount((prev) => prev - 1);
                  }
                }}
              >
                <SimpleLineIcons name="minus" size={16} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descText}>{item.description}</Text>
          </View>
          <View style={{ marginBottom: SIZES.small }}>
            {/* <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
            </View>
            <View style={styles.location}>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="truck-delivery-outline"
                  size={20}
                />
                <Text style={styles.delText}>Free Delivery</Text>
              </View>
            </View>
          </View> */}
          </View>

          <View style={styles.cartRow}>
            <TouchableOpacity onPress={handleAddToCart} style={styles.cartBtn}>
              <Text style={styles.cartTitle}>ADD TO CART</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
          </TouchableOpacity> */}
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}
