import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Products, Cart, Home } from "../screens";

import { View } from "react-native";

//Icons
import { Ionicons, Feather } from "@expo/vector-icons";

//consume data passed from navigation.navigate
import { useRoute } from "@react-navigation/native";

//Colors
import { COLORS } from "../constants/index";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: true,
  tabBarHideOnKeyboard: false,
  headerShown: false,
  headerBackVisible: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 50,
  },
  tabBarLabelStyle: {
    fontSize: 12, // Adjust font size here
    color: COLORS.primary, // Adjust font color here
    fontFamily: "semiBold",
  },
};

const BottomTabNavigation = () => {
  const route = useRoute();
  const { slides, activeCategory, initialScreen } = route.params || {};

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      initialRouteName={initialScreen === "Cart" ? "Cart" : "Products"}
    >
      <Tab.Screen
        name="Products"
        component={Products}
        initialParams={{ slides, activeCategory }}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "grid" : "grid-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                size={30}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
