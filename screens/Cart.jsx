import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native";

import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../components/cart/CartReducer";

import styles from "./cart.style";
import { COLORS } from "../constants";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState(cart);
  let Total;

  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (total, item) => total + calculateSubtotal(item.price, item.quantity),
      0
    );
    return (Total = Number.parseFloat(total).toFixed(2));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };
  const removeItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.title}</Text>
        <Text style={styles.itemPrice}>
          ₱{item.price} x {item.quantity}
        </Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => handleIncreaseQuantity(item)}>
          <AntDesign name="plus" size={20} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.itemQuantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => handleDecreaseQuantity(item)}>
          <AntDesign name="minus" size={20} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      {item.quantity === 1 && (
        <TouchableOpacity
          style={styles.deleteCOn}
          onPress={() => removeItem(item)}
        >
          <AntDesign
            style={styles.deleteIcon}
            name="delete"
            size={20}
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
        {cartItems.length > 0 ? (
          <View style={styles.innerContainer}>
            <FlatList
              data={cartItems}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
            />
          </View>
        ) : (
          <View style={styles.emptyCart}>
            <View style={styles.emptyCartIcon}>
              <MaterialCommunityIcons
                name="cart-variant"
                size={100}
                color={COLORS.green}
              />
            </View>

            <Text style={styles.emptyCartTxt}>Your Cart is Empty.</Text>
          </View>
        )}

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>₱{calculateTotal()}</Text>
        </View>
        <TouchableOpacity
          onPress={
            cartItems.length > 0
              ? () => navigation.navigate("Payment", { Total })
              : null
          }
          disabled={cartItems.length === 0}
        >
          <View style={styles.payContainer}>
            <Text style={styles.payText}>Checkout</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Cart;
