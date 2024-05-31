//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { StatusBar } from "expo-status-bar";

import React, { useEffect, useCallback } from "react";

//Screens
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import {
  Cart,
  ProductDetails,
  WelcomeScreen,
  Home,
  Products,
  Payment,
} from "./screens";

//redux
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import { setInitialCart } from "./components/cart/CartReducer";
import { loadCartData } from "./hook/loadCart";

//Toast
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

const App = () => {
  const dispatch = useDispatch();

  //Redux
  useEffect(() => {
    const fetchCartData = async () => {
      const cartData = await loadCartData();
      dispatch(setInitialCart(cartData));
    };
    fetchCartData();
  }, []);

  //fonts
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    pfBlack: require("./assets/fonts/PlayfairDisplay-Black.ttf"),
    pfBold: require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
    pfExtraBold: require("./assets/fonts/PlayfairDisplay-ExtraBold.ttf"),
    pfMedium: require("./assets/fonts/PlayfairDisplay-Medium.ttf"),
    pfRegular: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    pfSemiBold: require("./assets/fonts/PlayfairDisplay-SemiBold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <StatusBar />
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BottomNavigation"
          component={BottomTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      <Toast topOffset={95} visibilityTime={1500} />
    </NavigationContainer>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
