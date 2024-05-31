import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from "./welcome.styles";
import { COLORS, SIZES } from "../../constants";

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>
          All Fresh 🥬🥗🍅
        </Text>
        <Text style={styles.welcomeText(COLORS.primary, 0)}>
          Delectable Goodness
        </Text>
      </View>
    </View>
  );
}
