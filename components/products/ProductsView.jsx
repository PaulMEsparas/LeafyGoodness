import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./productsView.style";

import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES } from "../../constants";

const ProductsView = ({ item }) => {
  const navigation = useNavigation();
  // console.log(item.imageUrl, "ProductsView");
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("ProductDetails", { item })}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
        </View>
      </View>
      <View style={styles.details}>
        <View>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.priceBtn}>
            <Text style={styles.price} numberOfLines={1}>
              {item.price}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Cart")}
            >
              <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductsView;
