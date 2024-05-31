import AsyncStorage from "@react-native-async-storage/async-storage";

const updateAsyncStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (
    action.type === "cart/addToCart" ||
    action.type === "cart/emptyCart" ||
    action.type === "cart/removeFromCart" ||
    action.type === "cart/incrementQuantity" ||
    action.type === "cart/decrementQuantity"
  ) {
    const { cart } = store.getState().cart; // Assuming your cart state is stored under 'cart'
    AsyncStorage.setItem("cart", JSON.stringify(cart))
      .then(() => console.log("Cart updated in AsyncStorage"))
      .catch((error) =>
        console.error("Error updating cart in AsyncStorage:", error)
      );
  }
  return result;
};

export default updateAsyncStorageMiddleware;
