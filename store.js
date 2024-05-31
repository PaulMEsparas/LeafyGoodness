import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./components/cart/CartReducer";
import updateAsyncStorageMiddleware from "./middleware/updateAsyncStorageMiddleware";

const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    updateAsyncStorageMiddleware,
  ],
});

export default store;
