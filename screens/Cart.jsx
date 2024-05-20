import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native";

import { useState } from "react";

import styles from "./cart.style";
import { COLORS } from "../constants";

const Cart = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Beef Burger",
      price: 10,
      quantity: 2,
      image: require("../assets/images/Thumbnail/Burger.jpg"),
    },
    {
      id: "2",
      name: "Vietnamese Rolls",
      price: 20,
      quantity: 2,
      image: require("../assets/images/Thumbnail/Rolls.jpg"),
    },
    {
      id: "3",
      name: "Kani Salad",
      price: 30,
      quantity: 3,
      image: require("../assets/images/Thumbnail/Salads.jpg"),
    },
    {
      id: "6",
      name: "Item 6",
      price: 10,
      quantity: 2,
      image: require("../assets/images/Thumbnail/Burger.jpg"),
    },
    {
      id: "7",
      name: "Item 7",
      price: 10,
      quantity: 2,
      image: require("../assets/images/Thumbnail/Burger.jpg"),
    },
    {
      id: "8",
      name: "Item 8",
      price: 10,
      quantity: 2,
      image: require("../assets/images/Thumbnail/Burger.jpg"),
    },
  ]);
  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateSubtotal(item.price, item.quantity),
      0
    );
  };

  const handleIncreaseQuantity = (itemId) => {
    // Find the item in the cart based on its ID
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1, // Increase quantity by 1
        };
      }
      return item;
    });

    // Update the cart state with the updated cart items
    setCartItems(updatedCart);
  };

  const handleDecreaseQuantity = (itemId) => {
    let updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        if (item.quantity > 1) {
          // Decrease quantity by 1 if greater than 1
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          // If quantity is 1, remove the item by setting a flag
          return {
            ...item,
            quantity: 0,
          };
        }
      }
      return item;
    });

    // Filter out items with quantity 0 (marked for removal)
    updatedCart = updatedCart.filter((item) => item.quantity > 0);

    // Update the cart state with the updated cart items
    setCartItems(updatedCart);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>
          ${item.price} x {item.quantity}
        </Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id)}>
          <AntDesign name="plus" size={20} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.itemQuantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => handleDecreaseQuantity(item.id)}>
          <AntDesign name="minus" size={20} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      {item.quantity === 1 && (
        <TouchableOpacity
          style={styles.deleteCOn}
          onPress={() => removeItem(item.id)}
        >
          <AntDesign
            style={styles.deleteIcon}
            name="delete"
            size={30}
            color="red"
          />
        </TouchableOpacity>
      )}
    </View>
  );
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "rgba(248,248,255,0.5984768907563025)",
          "rgba(0,100,0,0.5984768907563025)",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.innerContainer}>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>${calculateTotal()}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
          <View style={styles.payContainer}>
            <Text style={styles.payText}>Checkout</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Cart;
