import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadCartData = async () => {
  try {
    const cartData = await AsyncStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error("Error loading cart data from AsyncStorage:", error);
    return [];
  }
};
