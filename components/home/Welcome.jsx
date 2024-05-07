import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from "./welcome.styles";
import { COLORS, SIZES } from "../../constants";

import { useNavigation } from "@react-navigation/native";

//Icons
import { Feather, Ionicons } from "@expo/vector-icons";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>
          Find the Most
        </Text>
        <Text style={styles.welcomeText(COLORS.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            onPressIn={() => {
              navigation.navigate("Search");
            }}
            placeholder="What are you looking for?"
            style={styles.searchInput}
          />
        </View>

        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons
              name="camera-outline"
              size={SIZES.xLarge}
              color={COLORS.offwhite}
            ></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
