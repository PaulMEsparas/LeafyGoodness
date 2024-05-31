import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  FlatList,
} from "react-native";

import styles from "./products.style";

import ProductsView from "../components/products/ProductsView";

import useFetch from "../hook/useFetch";

import { COLORS, SIZES } from "../constants";

//consume data passed from navigation.navigate
import { useRoute } from "@react-navigation/native";

//icons
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Products = ({ navigation }) => {
  //   const [userData, setUserData] = useState(null);
  //   const [userLogin, setUserLogin] = useState(false);
  const { data, isLoading, error } = useFetch();
  //get data passed from navigation.navigate
  const route = useRoute();
  const { slides, activeCategory } = route.params;
  // console.log(slides, "slides");
  // console.log(activeCategory, "activeCategory");
  // console.log(data, "data");

  const getImageSource = () => {
    switch (activeCategory) {
      case "Burgers":
        return require("../assets/images/Thumbnail/Burger.jpg");
      case "Rolls":
        return require("../assets/images/Thumbnail/Rolls.jpg");
      case "Salads":
        return require("../assets/images/Thumbnail/Salads.jpg");
      default:
        return require("../assets/images/Salads.jpeg");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backBtnContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtnContent}
        >
          <Ionicons
            style={styles.backBtnIcon}
            name="chevron-back-circle"
            size={30}
            color={COLORS.green}
          />
          {/* <Text style={styles.backBtnTxt}>
            {activeCategory === null ? "All products" : activeCategory}
          </Text> */}
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={getImageSource()}
          resizeMode="cover"
        />
      </View>

      <View style={styles.products}>
        <View style={styles.prodTxtContainer}>
          <Text style={styles.prodTxt("pfBold", COLORS.green, SIZES.xxLarge)}>
            {activeCategory === null ? "All products" : activeCategory}
          </Text>
          <Text style={styles.prodTxt("regular", COLORS.black, SIZES.large)}>
            Enjoy our delicious selections
          </Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong!</Text>
        ) : (
          <FlatList
            data={
              activeCategory
                ? data.filter((item) => item.category === activeCategory)
                : data
            }
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <ProductsView item={item} />}
            // horizontal
            // contentContainerStyle={{ Gap: SIZES.medium }}
            contentContainerStyle={{ paddingBottom: 55 }}
          />
        )}
      </View>
    </View>
  );
};

export default Products;
