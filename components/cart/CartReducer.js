import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    setInitialCart: (state, action) => {
      state.cart = action.payload;
    },
    addToCart: (state, action) => {
      const { _id, quantity } = action.payload;
      console.log(action.payload, "PAYLOAD");
      const itemInCart = state.cart.find((item) => item._id === _id);

      if (itemInCart) {
        if (quantity) {
          itemInCart.quantity += quantity; // Add the provided quantity to the existing quantity
        } else {
          itemInCart.quantity++;
        }
      } else {
        state.cart.push({ ...action.payload, quantity: quantity || 1 });
      }
    },

    emptyCart: (state, action) => {
      state.cart = [];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload._id);
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      itemInCart.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart.quantity === 1) {
        state.cart = state.cart.filter(
          (item) => item._id !== action.payload._id
        );
      } else {
        itemInCart.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  setInitialCart,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
