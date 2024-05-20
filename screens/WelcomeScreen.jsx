import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import styles from "./welcomeScreen.styles";

import { COLORS } from "../constants";

import { useNavigation } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/bg-welcome.jpg")}
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={[
            "rgba(248,248,255,0.5984768907563025)",
            "rgba(0,100,0,0.5984768907563025)",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <TouchableOpacity
            style={styles.entryText}
            onPress={() => navigation.navigate("Home")}
          >
            <View style={styles.container}>
              <Text style={styles.welcomeText(COLORS.black)}>
                Get your Leafy
              </Text>
              <Text style={styles.welcomeText(COLORS.primary, -20)}>
                Goodness
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.welcomeSubTxt}>
              Healthy • Fresh • Flavorful
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
}
