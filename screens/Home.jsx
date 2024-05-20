import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";

//Icons
import { Ionicons, Fontisto } from "@expo/vector-icons";

//constants
import { COLORS } from "../constants";

import { useNavigation } from "@react-navigation/native";

//components
import { Welcome } from "../components";
import ImageCarousel from "../components/home/ImageCarousel";
import Headings from "../components/home/Headings";
import ProductRow from "../components/products/ProductRow";
import Categories from "../components/home/Catgories";
import styles from "./homeStyle";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const [slides, setSlides] = useState([
    require("../assets/images/Beef-Burger.jpg"),
    require("../assets/images/Garden-Salad.jpg"),
    require("../assets/images/Pork-rolls.jpg"),
  ]);
  const navigation = useNavigation();

  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      }
    } catch (error) {
      console.log("Error retrieving the data:", error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <TouchableOpacity
            onPress={() => navigation.navigate("WelcomeScreen")}
          >
            <Ionicons
              name="ios-grid"
              size={24}
              color={COLORS.primary}
            ></Ionicons>
          </TouchableOpacity>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Welcome />
        <LinearGradient
          colors={[
            "rgba(248,248,255,0.5984768907563025)",
            "rgba(0,100,0,0.5984768907563025)",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Headings text={"- Choose from our menu -"} />
          <Categories
            setSlides={setSlides}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <ImageCarousel slides={slides} activeCategory={activeCategory} />

          <Headings text={"- Quick picks -"} />
          <ProductRow />
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
